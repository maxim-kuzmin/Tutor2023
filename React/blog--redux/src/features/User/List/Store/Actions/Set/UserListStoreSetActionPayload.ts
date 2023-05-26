import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserListStoreSliceName } from '../../Slice';
import { type UserListStoreSetActionResult } from './UserListStoreSetActionResult';

export interface UserListStoreSetActionPayload
  extends StoreActionPayload<UserListStoreSliceName> {
  actionResult: UserListStoreSetActionResult;
}

interface Options extends Omit<UserListStoreSetActionPayload, 'actionResult'> {
  readonly actionResult?: UserListStoreSetActionResult;
}

export function createUserListStoreSetActionPayload (
  options: Options
): UserListStoreSetActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
