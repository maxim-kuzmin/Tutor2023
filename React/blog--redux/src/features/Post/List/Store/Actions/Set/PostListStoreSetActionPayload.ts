import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostListStoreSliceName } from '../../Slice';
import { type PostListStoreSetActionResult } from './PostListStoreSetActionResult';

export interface PostListStoreSetActionPayload
  extends StoreActionPayload<PostListStoreSliceName> {
  actionResult: PostListStoreSetActionResult;
}

interface Options extends Omit<PostListStoreSetActionPayload, 'actionResult'> {
  readonly actionResult?: PostListStoreSetActionResult;
}

export function createPostListStoreSetActionPayload (
  options: Options
): PostListStoreSetActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
