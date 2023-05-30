import {
  type PostListStoreClearActionOutput,
  type PostListStoreLoadActionInput,
  type PostListStoreLoadActionOutput,
  type PostListStoreSetActionOutput
} from './Actions';
import { type PostListStoreSliceName } from './Slice';
import { type PostListStoreResource } from './PostListStoreResource';
import { type PostListStoreState } from './PostListStoreState';

export interface PostListStoreHooks {
  readonly useResource: () => PostListStoreResource;

  readonly useStoreClearActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    sliceName: PostListStoreSliceName,
    input: PostListStoreLoadActionInput
  ) => PostListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: (
    sliceName: PostListStoreSliceName
  ) => PostListStoreSetActionOutput;

  readonly useStoreState: (sliceName: PostListStoreSliceName) => PostListStoreState;
}
