import {
  type UserListStoreLoadActionOutput,
} from './Actions';
import { type UserListStoreSliceName } from './Slice/UserListStoreSliceName';
import { type UserListStoreState } from './UserListStoreState';

export interface UserListStoreHooks {
  readonly useStoreLoadActionOutput: (
    sliceName: UserListStoreSliceName,
  ) => UserListStoreLoadActionOutput;

  readonly useStoreState: (sliceName: UserListStoreSliceName) => UserListStoreState;
}
