import { type PostItemStoreDeleteActionResult } from './PostItemStoreDeleteActionResult';

export interface PostItemStoreDeleteActionDispatch {
  readonly run: (actionResult: PostItemStoreDeleteActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
