import { type UserListStoreLoadCompletedActionResult } from './UserListStoreLoadCompletedActionResult';

export interface UserListStoreLoadCompletedActionPayload {
  actionResult: UserListStoreLoadCompletedActionResult;
}

export function createUserListStoreLoadCompletedActionPayload (
  options: Partial<UserListStoreLoadCompletedActionPayload>
): UserListStoreLoadCompletedActionPayload {
  return {
    actionResult: options?.actionResult ?? null,
  };
}
