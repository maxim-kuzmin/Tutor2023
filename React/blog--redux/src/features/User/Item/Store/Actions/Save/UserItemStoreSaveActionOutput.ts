import { type UserItemStoreSaveCompletedActionResult } from '../SaveCompleted';
import { type UserItemStoreSaveActionDispatch } from './UserItemStoreSaveActionDispatch';

export interface UserItemStoreSaveActionOutput {
  readonly dispatchOfSaveAction: UserItemStoreSaveActionDispatch;
  readonly pendingOfSaveAction: boolean;
  readonly resultOfSaveCompletedAction: UserItemStoreSaveCompletedActionResult;
}
