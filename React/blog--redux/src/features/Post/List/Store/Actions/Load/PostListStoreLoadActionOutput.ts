import { type PostListStoreLoadCompletedActionResult } from '../LoadCompleted';
import { type PostListStoreLoadActionDispatch } from './PostListStoreLoadActionDispatch';

export interface PostListStoreLoadActionOutput {
  readonly dispatchOfLoadAction: PostListStoreLoadActionDispatch;
  readonly pendingOfLoadAction: boolean;
  readonly resultOfLoadCompletedAction: PostListStoreLoadCompletedActionResult;
}
