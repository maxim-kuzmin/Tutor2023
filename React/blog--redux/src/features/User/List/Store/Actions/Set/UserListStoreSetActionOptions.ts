import { type StoreActionOptions } from '../../../../../../common';
import { type UserListStoreSetActionCallback } from './UserListStoreSetActionCallback';
import { type UserListStoreSetActionResult } from './UserListStoreSetActionResult';

export interface UserListStoreSetActionOptions extends StoreActionOptions {
  readonly callback?: UserListStoreSetActionCallback;
  readonly resultOfSetAction?: UserListStoreSetActionResult;
}
