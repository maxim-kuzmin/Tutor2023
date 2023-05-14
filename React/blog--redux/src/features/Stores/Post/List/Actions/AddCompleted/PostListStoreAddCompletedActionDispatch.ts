import type { PostListStoreAddCompletedActionPayload } from './PostListStoreAddCompletedActionPayload';

export interface PostListStoreAddCompletedActionDispatch {
  readonly run: (payload: PostListStoreAddCompletedActionPayload) => void;
}
