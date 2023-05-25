import { type UserListStoreLoadCompletedActionResult } from '../LoadCompleted';
import { type UserListStoreLoadActionDispatch } from './UserListStoreLoadActionDispatch';

export interface UserListStoreLoadActionOutput {
  readonly dispatchOfLoadAction: UserListStoreLoadActionDispatch;
  readonly pendingOfLoadAction: boolean;
  readonly resultOfLoadCompletedAction: UserListStoreLoadCompletedActionResult;
}
