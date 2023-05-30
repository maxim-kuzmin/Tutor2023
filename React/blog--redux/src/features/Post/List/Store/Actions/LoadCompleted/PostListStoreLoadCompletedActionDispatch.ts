import { type PostListStoreLoadCompletedActionResult } from './PostListStoreLoadCompletedActionResult';

export interface PostListStoreLoadCompletedActionDispatch {
  readonly run: (actionResult: PostListStoreLoadCompletedActionResult) => void;
}
