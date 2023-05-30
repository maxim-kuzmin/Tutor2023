import { type UserItemStoreSetActionDispatch } from './UserItemStoreSetActionDispatch';
import { type UserItemStoreSetActionResult } from './UserItemStoreSetActionResult';

export interface UserItemStoreSetActionOutput {
  readonly dispatchOfSetAction: UserItemStoreSetActionDispatch;
  readonly resultOfSetAction: UserItemStoreSetActionResult;
}
