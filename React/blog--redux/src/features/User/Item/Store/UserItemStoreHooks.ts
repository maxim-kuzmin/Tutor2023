import {
  type UserItemStoreClearActionOutput,
  type UserItemStoreDeleteActionInput,
  type UserItemStoreDeleteActionOutput,
  type UserItemStoreLoadActionInput,
  type UserItemStoreLoadActionOutput,
  type UserItemStoreSaveActionInput,
  type UserItemStoreSaveActionOutput,
  type UserItemStoreSetActionOutput
} from './Actions';
import { type UserItemStoreSliceName } from './Slice';
import { type UserItemStoreResource } from './UserItemStoreResource';
import { type UserItemStoreState } from './UserItemStoreState';

export interface UserItemStoreHooks {
  readonly useResource: () => UserItemStoreResource;

  readonly useStoreClearActionOutput: (
    sliceName: UserItemStoreSliceName
  ) => UserItemStoreClearActionOutput;

  readonly useStoreDeleteActionOutput: (
    sliceName: UserItemStoreSliceName,
    input?: UserItemStoreDeleteActionInput
  ) => UserItemStoreDeleteActionOutput;

  readonly useStoreLoadActionOutput: (
    sliceName: UserItemStoreSliceName,
    input: UserItemStoreLoadActionInput
  ) => UserItemStoreLoadActionOutput;

  readonly useStoreSaveActionOutput: (
    sliceName: UserItemStoreSliceName,
    input?: UserItemStoreSaveActionInput
  ) => UserItemStoreSaveActionOutput;

  readonly useStoreSetActionOutput: (
    sliceName: UserItemStoreSliceName
  ) => UserItemStoreSetActionOutput;

  readonly useStoreState: (sliceName: UserItemStoreSliceName) => UserItemStoreState;
}
