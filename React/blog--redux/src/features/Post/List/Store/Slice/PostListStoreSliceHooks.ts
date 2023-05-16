import {
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreAddReactionCompletedActionOutput,
  type PostListStoreAddCompletedActionOutput
} from '../Actions';
import { type PostListStoreState } from '../PostListStoreState';

export interface PostListStoreSliceHooks {
  readonly useStoreAddCompletedActionOutput: () => PostListStoreAddCompletedActionOutput;
  readonly useStoreAddReactionCompletedActionOutput: () => PostListStoreAddReactionCompletedActionOutput;
  readonly useStoreUpdateCompletedActionOutput: () => PostListStoreUpdateCompletedActionOutput;
  readonly useStoreState: () => PostListStoreState;
}
