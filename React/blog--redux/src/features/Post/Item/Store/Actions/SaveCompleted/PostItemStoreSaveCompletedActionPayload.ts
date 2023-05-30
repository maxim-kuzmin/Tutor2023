import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreSaveCompletedActionResult } from './PostItemStoreSaveCompletedActionResult';

export interface PostItemStoreSaveCompletedActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  actionResult: PostItemStoreSaveCompletedActionResult;
}

interface Options extends Omit<PostItemStoreSaveCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreSaveCompletedActionResult;
}

export function createPostItemStoreSaveCompletedActionPayload (
  options: Options
): PostItemStoreSaveCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
