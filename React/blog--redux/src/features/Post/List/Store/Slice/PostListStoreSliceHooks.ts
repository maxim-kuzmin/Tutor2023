import {
  type PostListStoreClearActionOutput,
  type PostListStoreLoadActionInput,
  type PostListStoreLoadActionOutput,
  type PostListStoreSetActionOutput
} from '../Actions';
import { type PostListStoreState } from '../PostListStoreState';

export interface PostListStoreSliceHooks {
  readonly useStoreClearActionOutput: () => PostListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    input: PostListStoreLoadActionInput
  ) => PostListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: () => PostListStoreSetActionOutput;

  readonly useStoreState: () => PostListStoreState;
}
