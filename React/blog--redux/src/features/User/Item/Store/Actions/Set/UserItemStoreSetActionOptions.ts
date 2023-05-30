import { type StoreActionOptions } from '../../../../../../common';
import { type UserItemStoreSetActionResult } from './UserItemStoreSetActionResult';

export interface UserItemStoreSetActionOptions extends StoreActionOptions {
  readonly resultOfSetAction?: UserItemStoreSetActionResult;
}
