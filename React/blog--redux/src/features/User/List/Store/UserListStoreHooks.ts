import {
  type UserListStoreClearActionInput,
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionInput,
  type UserListStoreSetActionOutput
} from './Actions';
import { type UserListStoreSliceName } from './Slice';
import { type UserListStoreResource } from './UserListStoreResource';
import { type UserListStoreState } from './UserListStoreState';

export interface UserListStoreHooks {
  readonly useResource: () => UserListStoreResource;

  readonly useStoreClearActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreClearActionInput
  ) => UserListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreLoadActionInput
  ) => UserListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreSetActionInput
  ) => UserListStoreSetActionOutput;

  readonly useStoreState: (sliceName: UserListStoreSliceName) => UserListStoreState;
}
