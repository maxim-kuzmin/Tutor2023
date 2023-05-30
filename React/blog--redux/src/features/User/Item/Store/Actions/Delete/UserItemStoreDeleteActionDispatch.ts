import { type UserItemStoreDeleteActionResult } from './UserItemStoreDeleteActionResult';

export interface UserItemStoreDeleteActionDispatch {
  readonly run: (actionResult: UserItemStoreDeleteActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
