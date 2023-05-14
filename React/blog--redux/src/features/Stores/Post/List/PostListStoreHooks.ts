import { type PostListStoreAddCompletedActionOutput } from './Actions';
import { type PostListStoreSliceName } from './Slice/PostListStoreSliceName';
import { type PostListStoreState } from './PostListStoreState';

export interface PostListStoreHooks {
  readonly useStoreAddCompletedActionOutput: (sliceName: PostListStoreSliceName) => PostListStoreAddCompletedActionOutput;
  readonly useStoreState: (sliceName: PostListStoreSliceName) => PostListStoreState;
}
