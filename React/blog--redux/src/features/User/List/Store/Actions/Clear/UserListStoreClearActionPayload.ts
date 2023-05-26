import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserListStoreSliceName } from '../../Slice';

export interface UserListStoreClearActionPayload
  extends StoreActionPayload<UserListStoreSliceName> {
}

export function createUserListStoreClearActionPayload (
  options: UserListStoreClearActionPayload
): UserListStoreClearActionPayload {
  return createStoreActionPayload(options);
}
