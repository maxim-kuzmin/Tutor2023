import { type StoreActionOptions } from '../../../../../../common';
import { type PostItemStoreSetActionResult } from './PostItemStoreSetActionResult';

export interface PostItemStoreSetActionOptions extends StoreActionOptions {
  readonly resultOfSetAction?: PostItemStoreSetActionResult;
}
