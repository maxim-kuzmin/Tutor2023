import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';

export interface UserItemStoreClearActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
}

export function createUserItemStoreClearActionPayload (
  options: UserItemStoreClearActionPayload
): UserItemStoreClearActionPayload {
  return createStoreActionPayload(options);
}
