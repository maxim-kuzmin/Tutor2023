import { type UserItemStoreDeleteCompletedActionResult } from '../DeleteCompleted';
import { type UserItemStoreDeleteActionDispatch } from './UserItemStoreDeleteActionDispatch';

export interface UserItemStoreDeleteActionOutput {
  readonly dispatchOfDeleteAction: UserItemStoreDeleteActionDispatch;
  readonly pendingOfDeleteAction: boolean;
  readonly resultOfDeleteCompletedAction: UserItemStoreDeleteCompletedActionResult;
}
