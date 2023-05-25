import { type StoreActionOptions } from '../../../../../../common';
import { type UserListStoreClearActionCallback } from './UserListStoreClearActionCallback';

export interface UserListStoreClearActionOptions extends StoreActionOptions {
  readonly callback?: UserListStoreClearActionCallback;
}
