import {
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreUpdateCompletedActionOutput,
} from './Actions';
import { type PostListStoreSliceName } from './Slice/PostListStoreSliceName';
import { type PostListStoreState } from './PostListStoreState';

export interface PostListStoreHooks {
  readonly useStoreAddCompletedActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreAddCompletedActionOutput;

  readonly useStoreUpdateCompletedActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreUpdateCompletedActionOutput;

  readonly useStoreState: (sliceName: PostListStoreSliceName) => PostListStoreState;
}
