import { type PostListStoreSetActionDispatch } from './PostListStoreSetActionDispatch';
import { type PostListStoreSetActionResult } from './PostListStoreSetActionResult';

export interface PostListStoreSetActionOutput {
  readonly dispatchOfSetAction: PostListStoreSetActionDispatch;
  readonly resultOfSetAction: PostListStoreSetActionResult;
}
