import { type UserListStoreSliceName } from './Slice/UserListStoreSliceName';
import { type UserListStoreState } from './UserListStoreState';

export interface UserListStoreHooks {
  readonly useStoreState: (sliceName: UserListStoreSliceName) => UserListStoreState;
}
