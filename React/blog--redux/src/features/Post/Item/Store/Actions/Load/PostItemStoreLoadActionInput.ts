import { type PostItemStoreLoadActionResult } from './PostItemStoreLoadActionResult';

export interface PostItemStoreLoadActionInput {
  readonly abortController?: AbortController;
  readonly resultOfLoadAction: PostItemStoreLoadActionResult;
}
