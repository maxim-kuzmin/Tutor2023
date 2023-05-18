import { type UserListStoreLoadActionOutput } from '../Actions';
import { type UserListStoreState } from '../UserListStoreState';

export interface UserListStoreSliceHooks {
  readonly useStoreLoadActionOutput: () => UserListStoreLoadActionOutput;

  readonly useStoreState: () => UserListStoreState;
}
