import { type UserItemStoreSetActionResult } from './UserItemStoreSetActionResult';

export interface UserItemStoreSetActionDispatch {
  readonly run: (actionResult: UserItemStoreSetActionResult) => void;
}
