import { type PostListStoreUpdateCompletedActionPayload } from './PostListStoreUpdateCompletedActionPayload';

export interface PostListStoreUpdateCompletedActionDispatch {
  readonly run: (payload: PostListStoreUpdateCompletedActionPayload) => void;
}
