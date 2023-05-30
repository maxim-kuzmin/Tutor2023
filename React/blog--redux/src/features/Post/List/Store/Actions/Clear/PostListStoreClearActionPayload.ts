import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostListStoreSliceName } from '../../Slice';

export interface PostListStoreClearActionPayload
  extends StoreActionPayload<PostListStoreSliceName> {
}

export function createPostListStoreClearActionPayload (
  options: PostListStoreClearActionPayload
): PostListStoreClearActionPayload {
  return createStoreActionPayload(options);
}
