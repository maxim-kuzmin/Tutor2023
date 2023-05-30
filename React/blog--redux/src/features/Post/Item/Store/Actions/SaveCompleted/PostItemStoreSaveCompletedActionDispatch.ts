import { type PostItemStoreSaveCompletedActionResult } from './PostItemStoreSaveCompletedActionResult';

export interface PostItemStoreSaveCompletedActionDispatch {
  readonly run: (actionResult: PostItemStoreSaveCompletedActionResult) => void;
}
