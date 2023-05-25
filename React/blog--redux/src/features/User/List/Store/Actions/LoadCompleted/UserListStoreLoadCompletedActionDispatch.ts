import { type UserListStoreLoadCompletedActionResult } from './UserListStoreLoadCompletedActionResult';

export interface UserListStoreLoadCompletedActionDispatch {
  readonly run: (actionResult: UserListStoreLoadCompletedActionResult) => void;
}
