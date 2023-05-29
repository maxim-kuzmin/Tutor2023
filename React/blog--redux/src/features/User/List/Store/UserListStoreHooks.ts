import {
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionOutput
} from './Actions';
import { type UserListStoreSliceName } from './Slice';
import { type UserListStoreResource } from './UserListStoreResource';
import { type UserListStoreState } from './UserListStoreState';

export interface UserListStoreHooks {
  readonly useResource: () => UserListStoreResource;

  readonly useStoreClearActionOutput: (
    sliceName: UserListStoreSliceName
  ) => UserListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    sliceName: UserListStoreSliceName,
    input: UserListStoreLoadActionInput
  ) => UserListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: (
    sliceName: UserListStoreSliceName
  ) => UserListStoreSetActionOutput;

  readonly useStoreState: (sliceName: UserListStoreSliceName) => UserListStoreState;
}
