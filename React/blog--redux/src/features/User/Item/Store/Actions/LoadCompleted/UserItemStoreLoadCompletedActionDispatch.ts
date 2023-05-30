import { type UserItemStoreLoadCompletedActionResult } from './UserItemStoreLoadCompletedActionResult';

export interface UserItemStoreLoadCompletedActionDispatch {
  readonly run: (actionResult: UserItemStoreLoadCompletedActionResult) => void;
}
