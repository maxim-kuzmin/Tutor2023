import { type UserListStoreSetActionResult } from './UserListStoreSetActionResult';

export interface UserListStoreSetActionPayload {
  actionResult: UserListStoreSetActionResult;
}

export function createUserListStoreSetActionPayload (
  options: Partial<UserListStoreSetActionPayload>
): UserListStoreSetActionPayload {
  return {
    actionResult: options?.actionResult ?? null,
  };
}
