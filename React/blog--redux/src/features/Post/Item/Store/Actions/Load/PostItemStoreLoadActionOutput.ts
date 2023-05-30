import { type PostItemStoreLoadCompletedActionResult } from '../LoadCompleted';
import { type PostItemStoreLoadActionDispatch } from './PostItemStoreLoadActionDispatch';

export interface PostItemStoreLoadActionOutput {
  readonly dispatchOfLoadAction: PostItemStoreLoadActionDispatch;
  readonly pendingOfLoadAction: boolean;
  readonly resultOfLoadCompletedAction: PostItemStoreLoadCompletedActionResult;
}
