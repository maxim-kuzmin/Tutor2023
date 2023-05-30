import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreSaveActionResult } from './PostItemStoreSaveActionResult';

export interface PostItemStoreSaveActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  readonly actionResult: PostItemStoreSaveActionResult;
}

interface Options extends Omit<PostItemStoreSaveActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreSaveActionResult;
}

export function createPostItemStoreSaveActionPayload (
  options: Options
): PostItemStoreSaveActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
