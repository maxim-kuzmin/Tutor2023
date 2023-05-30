import { type PostItemStoreLoadActionResult } from './PostItemStoreLoadActionResult';

export interface PostItemStoreLoadActionDispatch {
  readonly run: (actionResult: PostItemStoreLoadActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
