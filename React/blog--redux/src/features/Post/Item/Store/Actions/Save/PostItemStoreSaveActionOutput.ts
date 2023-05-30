import { type PostItemStoreSaveCompletedActionResult } from '../SaveCompleted';
import { type PostItemStoreSaveActionDispatch } from './PostItemStoreSaveActionDispatch';

export interface PostItemStoreSaveActionOutput {
  readonly dispatchOfSaveAction: PostItemStoreSaveActionDispatch;
  readonly pendingOfSaveAction: boolean;
  readonly resultOfSaveCompletedAction: PostItemStoreSaveCompletedActionResult;
}
