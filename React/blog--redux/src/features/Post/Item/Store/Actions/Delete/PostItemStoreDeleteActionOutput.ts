import { type PostItemStoreDeleteCompletedActionResult } from '../DeleteCompleted';
import { type PostItemStoreDeleteActionDispatch } from './PostItemStoreDeleteActionDispatch';

export interface PostItemStoreDeleteActionOutput {
  readonly dispatchOfDeleteAction: PostItemStoreDeleteActionDispatch;
  readonly pendingOfDeleteAction: boolean;
  readonly resultOfDeleteCompletedAction: PostItemStoreDeleteCompletedActionResult;
}
