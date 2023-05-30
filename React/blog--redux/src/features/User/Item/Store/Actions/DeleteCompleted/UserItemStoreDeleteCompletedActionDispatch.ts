import { type UserItemStoreDeleteCompletedActionResult } from './UserItemStoreDeleteCompletedActionResult';

export interface UserItemStoreDeleteCompletedActionDispatch {
  run: (actionResult: UserItemStoreDeleteCompletedActionResult) => void;
}
