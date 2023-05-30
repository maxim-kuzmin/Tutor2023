import { type UserItemStoreSaveCompletedActionResult } from './UserItemStoreSaveCompletedActionResult';

export interface UserItemStoreSaveCompletedActionDispatch {
  readonly run: (actionResult: UserItemStoreSaveCompletedActionResult) => void;
}
