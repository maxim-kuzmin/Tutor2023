import { type PostItemStoreSaveActionResult } from './PostItemStoreSaveActionResult';

export interface PostItemStoreSaveActionDispatch {
  readonly run: (actionResult: PostItemStoreSaveActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
