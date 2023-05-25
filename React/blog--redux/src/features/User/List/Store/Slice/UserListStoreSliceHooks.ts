import {
  type UserListStoreClearActionInput,
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionInput,
  type UserListStoreSetActionOutput
} from '../Actions';
import { type UserListStoreState } from '../UserListStoreState';

export interface UserListStoreSliceHooks {
  readonly useStoreClearActionOutput: (
    input: UserListStoreClearActionInput
  ) => UserListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    input: UserListStoreLoadActionInput
  ) => UserListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: (
    input: UserListStoreSetActionInput
  ) => UserListStoreSetActionOutput;

  readonly useStoreState: () => UserListStoreState;
}
