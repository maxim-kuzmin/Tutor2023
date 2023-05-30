import {
  type PostItemStoreClearActionOutput,
  type PostItemStoreDeleteActionInput,
  type PostItemStoreDeleteActionOutput,
  type PostItemStoreLoadActionInput,
  type PostItemStoreLoadActionOutput,
  type PostItemStoreSaveActionInput,
  type PostItemStoreSaveActionOutput,
  type PostItemStoreSetActionOutput
} from './Actions';
import { type PostItemStoreSliceName } from './Slice';
import { type PostItemStoreResource } from './PostItemStoreResource';
import { type PostItemStoreState } from './PostItemStoreState';

export interface PostItemStoreHooks {
  readonly useResource: () => PostItemStoreResource;

  readonly useStoreClearActionOutput: (
    sliceName: PostItemStoreSliceName
  ) => PostItemStoreClearActionOutput;

  readonly useStoreDeleteActionOutput: (
    sliceName: PostItemStoreSliceName,
    input?: PostItemStoreDeleteActionInput
  ) => PostItemStoreDeleteActionOutput;

  readonly useStoreLoadActionOutput: (
    sliceName: PostItemStoreSliceName,
    input: PostItemStoreLoadActionInput
  ) => PostItemStoreLoadActionOutput;

  readonly useStoreSaveActionOutput: (
    sliceName: PostItemStoreSliceName,
    input?: PostItemStoreSaveActionInput
  ) => PostItemStoreSaveActionOutput;

  readonly useStoreSetActionOutput: (
    sliceName: PostItemStoreSliceName
  ) => PostItemStoreSetActionOutput;

  readonly useStoreState: (sliceName: PostItemStoreSliceName) => PostItemStoreState;
}
