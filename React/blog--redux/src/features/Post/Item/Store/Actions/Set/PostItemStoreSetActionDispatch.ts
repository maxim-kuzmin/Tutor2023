import { type PostItemStoreSetActionResult } from './PostItemStoreSetActionResult';

export interface PostItemStoreSetActionDispatch {
  readonly run: (actionResult: PostItemStoreSetActionResult) => void;
}
