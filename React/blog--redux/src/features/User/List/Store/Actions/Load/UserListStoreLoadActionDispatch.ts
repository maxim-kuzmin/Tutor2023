import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionDispatch {
  readonly run: (actionResult: UserListStoreLoadActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
