import { type PostListStoreSetActionResult } from './PostListStoreSetActionResult';

export interface PostListStoreSetActionDispatch {
  readonly run: (actionResult: PostListStoreSetActionResult) => void;
}
