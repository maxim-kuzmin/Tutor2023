import { type UserListStoreLoadCompletedActionCallback } from '../LoadCompleted';
import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionInput {
  readonly abortController?: AbortController;
  readonly onActionCompleted?: UserListStoreLoadCompletedActionCallback;
  readonly resultOfLoadAction: UserListStoreLoadActionResult;
}
