import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreDeleteCompletedActionResult } from './PostItemStoreDeleteCompletedActionResult';

export interface PostItemStoreDeleteCompletedActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  actionResult: PostItemStoreDeleteCompletedActionResult;
}

interface Options extends Omit<PostItemStoreDeleteCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreDeleteCompletedActionResult;
}

export function createPostItemStoreDeleteCompletedActionPayload (
  options: Options
): PostItemStoreDeleteCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
