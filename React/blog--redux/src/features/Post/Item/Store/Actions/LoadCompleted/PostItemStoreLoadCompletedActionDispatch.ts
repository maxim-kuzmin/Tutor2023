import { type PostItemStoreLoadCompletedActionResult } from './PostItemStoreLoadCompletedActionResult';

export interface PostItemStoreLoadCompletedActionDispatch {
  readonly run: (actionResult: PostItemStoreLoadCompletedActionResult) => void;
}
