import {
  type UserListStoreClearActionDispatch,
  type UserListStoreClearActionInput,
  type UserListStoreClearActionOptions,
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionDispatch,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOptions,
  type UserListStoreLoadActionOutput,
  type UserListStoreLoadCompletedActionDispatch,
  type UserListStoreLoadCompletedActionOptions,
  type UserListStoreSetActionDispatch,
  type UserListStoreSetActionInput,
  type UserListStoreSetActionOptions,
  type UserListStoreSetActionOutput
} from './Actions';
import { type UserListStoreSliceName } from './Slice';
import { type UserListStoreResource } from './UserListStoreResource';
import { type UserListStoreState } from './UserListStoreState';

export interface UserListStoreHooks {
  readonly useResource: () => UserListStoreResource;

  readonly useStoreClearActionDispatch: (
    sliceName: UserListStoreSliceName,
    options?: UserListStoreClearActionOptions
  ) => UserListStoreClearActionDispatch;

  readonly useStoreClearActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreClearActionInput
  ) => UserListStoreClearActionOutput;

  readonly useStoreLoadActionDispatch: (
    sliceName: UserListStoreSliceName,
    options?: UserListStoreLoadActionOptions
  ) => UserListStoreLoadActionDispatch;

  readonly useStoreLoadActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreLoadActionInput
  ) => UserListStoreLoadActionOutput;

  readonly useStoreLoadCompletedActionDispatch: (
    sliceName: UserListStoreSliceName,
    options?: UserListStoreLoadCompletedActionOptions
  ) => UserListStoreLoadCompletedActionDispatch;

  readonly useStoreSetActionDispatch: (
    sliceName: UserListStoreSliceName,
    options?: UserListStoreSetActionOptions
  ) => UserListStoreSetActionDispatch;

  readonly useStoreSetActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreSetActionInput
  ) => UserListStoreSetActionOutput;

  readonly useStoreState: (sliceName: UserListStoreSliceName) => UserListStoreState;
}
