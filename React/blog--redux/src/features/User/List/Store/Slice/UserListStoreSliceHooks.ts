import {
  type UserListStoreClearActionOutput,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreSetActionOutput
} from '../Actions';
import { type UserListStoreState } from '../UserListStoreState';

export interface UserListStoreSliceHooks {
  readonly useStoreClearActionOutput: () => UserListStoreClearActionOutput;

  readonly useStoreLoadActionOutput: (
    input: UserListStoreLoadActionInput
  ) => UserListStoreLoadActionOutput;

  readonly useStoreSetActionOutput: () => UserListStoreSetActionOutput;

  readonly useStoreState: () => UserListStoreState;
}
