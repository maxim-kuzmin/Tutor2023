import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionInput {
  readonly abortController?: AbortController;
  readonly resultOfLoadAction: UserListStoreLoadActionResult;
}
