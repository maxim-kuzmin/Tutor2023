import { type PostListStoreLoadActionResult } from './PostListStoreLoadActionResult';

export interface PostListStoreLoadActionDispatch {
  readonly run: (actionResult: PostListStoreLoadActionResult, abortSignal?: AbortSignal) => Promise<void>;
}
