import { type PostListStoreAddCompletedActionOutput } from './Actions';
import { type PostListStoreSlice } from './PostListStoreSlice';
import { type PostListStoreState } from './PostListStoreState';

export interface PostListStoreHooks {
  readonly useStoreAddCompletedActionOutput: (slice: PostListStoreSlice) => PostListStoreAddCompletedActionOutput;
  readonly useStoreState: (slice: PostListStoreSlice) => PostListStoreState;
}
