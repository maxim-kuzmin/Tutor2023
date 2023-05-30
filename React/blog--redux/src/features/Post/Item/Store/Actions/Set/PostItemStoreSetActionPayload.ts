import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';
import { type PostItemStoreSetActionResult } from './PostItemStoreSetActionResult';

export interface PostItemStoreSetActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
  actionResult: PostItemStoreSetActionResult;
}

interface Options extends Omit<PostItemStoreSetActionPayload, 'actionResult'> {
  readonly actionResult?: PostItemStoreSetActionResult;
}

export function createPostItemStoreSetActionPayload (
  options: Options
): PostItemStoreSetActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
