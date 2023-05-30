import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreLoadCompletedActionResult } from './PostItemStoreLoadCompletedActionResult';

export interface PostItemStoreLoadCompletedActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  actionResult: PostItemStoreLoadCompletedActionResult;
}

interface Options extends Omit<PostItemStoreLoadCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreLoadCompletedActionResult;
}

export function createPostItemStoreLoadCompletedActionPayload (
  options: Options
): PostItemStoreLoadCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
