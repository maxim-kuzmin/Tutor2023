import { type UserListStoreState } from '../UserListStoreState';

export interface UserListStoreSliceHooks {
  readonly useStoreState: () => UserListStoreState;
}
