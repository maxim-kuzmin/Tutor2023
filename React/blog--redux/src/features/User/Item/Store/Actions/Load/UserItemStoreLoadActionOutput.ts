import { type UserItemStoreLoadCompletedActionResult } from '../LoadCompleted';
import { type UserItemStoreLoadActionDispatch } from './UserItemStoreLoadActionDispatch';

export interface UserItemStoreLoadActionOutput {
  readonly dispatchOfLoadAction: UserItemStoreLoadActionDispatch;
  readonly pendingOfLoadAction: boolean;
  readonly resultOfLoadCompletedAction: UserItemStoreLoadCompletedActionResult;
}
