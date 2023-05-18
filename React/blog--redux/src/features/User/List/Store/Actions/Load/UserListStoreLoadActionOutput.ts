import { type UserListStoreLoadActionDispatch } from './UserListStoreLoadActionDispatch';

export interface UserListStoreLoadActionOutput {
  readonly dispatchOfLoadAction: UserListStoreLoadActionDispatch;
  readonly pendingOfLoadAction: boolean;
}
