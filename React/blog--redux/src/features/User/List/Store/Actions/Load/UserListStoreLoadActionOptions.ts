import { type StoreActionOptions } from '../../../../../../common';
import { type UserListStoreSetActionCallback } from '../Set';
import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionOptions extends StoreActionOptions {
  readonly callback?: UserListStoreSetActionCallback;
  readonly resultOfLoadAction?: UserListStoreLoadActionResult;
}
