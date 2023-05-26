import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserListStoreSliceName } from '../../Slice';
import { type UserListStoreLoadCompletedActionResult } from './UserListStoreLoadCompletedActionResult';

export interface UserListStoreLoadCompletedActionPayload
  extends StoreActionPayload<UserListStoreSliceName> {
  actionResult: UserListStoreLoadCompletedActionResult;
}

interface Options extends Omit<UserListStoreLoadCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: UserListStoreLoadCompletedActionResult;
}

export function createUserListStoreLoadCompletedActionPayload (
  options: Options
): UserListStoreLoadCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
