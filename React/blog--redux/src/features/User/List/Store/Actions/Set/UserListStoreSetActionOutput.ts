import { type UserListStoreSetActionDispatch } from './UserListStoreSetActionDispatch';
import { type UserListStoreSetActionResult } from './UserListStoreSetActionResult';

export interface UserListStoreSetActionOutput {
  readonly dispatchOfSetAction: UserListStoreSetActionDispatch;
  readonly resultOfSetAction: UserListStoreSetActionResult;
}
