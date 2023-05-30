import {
  type UserItemStoreClearActionOutput,
  type UserItemStoreDeleteActionInput,
  type UserItemStoreDeleteActionOutput,
  type UserItemStoreLoadActionInput,
  type UserItemStoreLoadActionOutput,
  type UserItemStoreSaveActionInput,
  type UserItemStoreSaveActionOutput,
  type UserItemStoreSetActionOutput
} from '../Actions';
import { type UserItemStoreState } from '../UserItemStoreState';

export interface UserItemStoreSliceHooks {
  readonly useStoreClearActionOutput: () => UserItemStoreClearActionOutput;

  readonly useStoreDeleteActionOutput: (
    input?: UserItemStoreDeleteActionInput
  ) => UserItemStoreDeleteActionOutput;

  readonly useStoreLoadActionOutput: (
    input: UserItemStoreLoadActionInput
  ) => UserItemStoreLoadActionOutput;

  readonly useStoreSaveActionOutput: (
    input?: UserItemStoreSaveActionInput
  ) => UserItemStoreSaveActionOutput;

  readonly useStoreSetActionOutput: () => UserItemStoreSetActionOutput;

  readonly useStoreState: () => UserItemStoreState;
}
