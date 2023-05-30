import { type PostItemStoreSetActionDispatch } from './PostItemStoreSetActionDispatch';
import { type PostItemStoreSetActionResult } from './PostItemStoreSetActionResult';

export interface PostItemStoreSetActionOutput {
  readonly dispatchOfSetAction: PostItemStoreSetActionDispatch;
  readonly resultOfSetAction: PostItemStoreSetActionResult;
}
