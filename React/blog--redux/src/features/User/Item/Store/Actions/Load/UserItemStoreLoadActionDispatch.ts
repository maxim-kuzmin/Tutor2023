import { type UserItemStoreLoadActionResult } from './UserItemStoreLoadActionResult';

export interface UserItemStoreLoadActionDispatch {
  readonly run: (actionResult: UserItemStoreLoadActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
