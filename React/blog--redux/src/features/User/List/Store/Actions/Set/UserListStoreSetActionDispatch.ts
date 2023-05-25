import { type UserListStoreSetActionResult } from './UserListStoreSetActionResult';

export interface UserListStoreSetActionDispatch {
  readonly run: (actionResult: UserListStoreSetActionResult) => void;
}
