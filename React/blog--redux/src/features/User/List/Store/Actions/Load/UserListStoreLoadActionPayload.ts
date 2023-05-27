import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserListStoreSliceName } from '../../Slice';
import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionPayload
  extends StoreActionPayload<UserListStoreSliceName> {
  readonly actionResult: UserListStoreLoadActionResult;
}

interface Options extends Omit<UserListStoreLoadActionPayload, 'actionResult'> {
  readonly actionResult?: UserListStoreLoadActionResult;
}

export function createUserListStoreLoadActionPayload (
  options: Options
): UserListStoreLoadActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
