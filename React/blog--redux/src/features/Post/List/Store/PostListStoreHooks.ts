import {
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreAddReactionCompletedActionOutput,
  type PostListStoreUpdateCompletedActionOutput,
} from './Actions';
import { type PostListStoreSliceName } from './Slice/PostListStoreSliceName';
import { type PostListStoreState } from './PostListStoreState';

export interface PostListStoreHooks {
  readonly useStoreAddCompletedActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreAddCompletedActionOutput;

  readonly useStoreAddReactionCompletedActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreAddReactionCompletedActionOutput;

  readonly useStoreUpdateCompletedActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreUpdateCompletedActionOutput;

  readonly useStoreState: (sliceName: PostListStoreSliceName) => PostListStoreState;
}
