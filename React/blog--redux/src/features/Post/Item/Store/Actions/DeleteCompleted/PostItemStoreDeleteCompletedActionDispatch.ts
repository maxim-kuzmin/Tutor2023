import { type PostItemStoreDeleteCompletedActionResult } from './PostItemStoreDeleteCompletedActionResult';

export interface PostItemStoreDeleteCompletedActionDispatch {
  run: (actionResult: PostItemStoreDeleteCompletedActionResult) => void;
}
