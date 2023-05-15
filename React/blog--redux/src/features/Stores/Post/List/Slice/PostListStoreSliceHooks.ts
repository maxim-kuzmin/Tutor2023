import {
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreAddCompletedActionOutput
} from '../Actions';
import { type PostListStoreState } from '../PostListStoreState';

export interface PostListStoreSliceHooks {
  readonly useStoreAddCompletedActionOutput: () => PostListStoreAddCompletedActionOutput;
  readonly useStoreUpdateCompletedActionOutput: () => PostListStoreUpdateCompletedActionOutput;
  readonly useStoreState: () => PostListStoreState;
}
