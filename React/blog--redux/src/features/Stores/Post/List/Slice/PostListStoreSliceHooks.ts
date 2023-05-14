import { type PostListStoreAddCompletedActionOutput } from '../Actions';
import { type PostListStoreState } from '../PostListStoreState';

export interface PostListStoreSliceHooks {
  readonly useStoreAddCompletedActionOutput: () => PostListStoreAddCompletedActionOutput;
  readonly useStoreState: () => PostListStoreState;
}
