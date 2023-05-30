import { type PostListStoreLoadActionResult } from './PostListStoreLoadActionResult';

export interface PostListStoreLoadActionInput {
  readonly abortController?: AbortController;
  readonly resultOfLoadAction: PostListStoreLoadActionResult;
}
