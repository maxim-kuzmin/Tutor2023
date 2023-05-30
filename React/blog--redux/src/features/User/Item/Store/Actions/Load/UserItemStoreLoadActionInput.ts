import { type UserItemStoreLoadActionResult } from './UserItemStoreLoadActionResult';

export interface UserItemStoreLoadActionInput {
  readonly abortController?: AbortController;
  readonly resultOfLoadAction: UserItemStoreLoadActionResult;
}
