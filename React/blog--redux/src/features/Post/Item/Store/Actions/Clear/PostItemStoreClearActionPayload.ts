import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type PostItemStoreSliceName } from '../../Slice';

export interface PostItemStoreClearActionPayload
  extends StoreActionPayload<PostItemStoreSliceName> {
}

export function createPostItemStoreClearActionPayload (
  options: PostItemStoreClearActionPayload
): PostItemStoreClearActionPayload {
  return createStoreActionPayload(options);
}
