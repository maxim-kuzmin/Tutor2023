import { type UserItemStoreSaveActionResult } from './UserItemStoreSaveActionResult';

export interface UserItemStoreSaveActionDispatch {
  readonly run: (actionResult: UserItemStoreSaveActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
