import { type StoreActionOptions } from '../../../../../../common';
import { type UserListStoreLoadCompletedActionCallback } from './UserListStoreLoadCompletedActionCallback';
import { type UserListStoreLoadCompletedActionResult } from './UserListStoreLoadCompletedActionResult';

export interface UserListStoreLoadCompletedActionOptions extends StoreActionOptions {
  readonly callback?: UserListStoreLoadCompletedActionCallback;
  readonly resultOfLoadCompletedAction?: UserListStoreLoadCompletedActionResult;
}
