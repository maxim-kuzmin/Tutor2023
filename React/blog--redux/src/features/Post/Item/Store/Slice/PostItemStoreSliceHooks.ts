import {
  type PostItemStoreClearActionOutput,
  type PostItemStoreDeleteActionInput,
  type PostItemStoreDeleteActionOutput,
  type PostItemStoreLoadActionInput,
  type PostItemStoreLoadActionOutput,
  type PostItemStoreSaveActionInput,
  type PostItemStoreSaveActionOutput,
  type PostItemStoreSetActionOutput
} from '../Actions';
import { type PostItemStoreState } from '../PostItemStoreState';

export interface PostItemStoreSliceHooks {
  readonly useStoreClearActionOutput: () => PostItemStoreClearActionOutput;

  readonly useStoreDeleteActionOutput: (
    input?: PostItemStoreDeleteActionInput
  ) => PostItemStoreDeleteActionOutput;

  readonly useStoreLoadActionOutput: (
    input: PostItemStoreLoadActionInput
  ) => PostItemStoreLoadActionOutput;

  readonly useStoreSaveActionOutput: (
    input?: PostItemStoreSaveActionInput
  ) => PostItemStoreSaveActionOutput;

  readonly useStoreSetActionOutput: () => PostItemStoreSetActionOutput;

  readonly useStoreState: () => PostItemStoreState;
}
