import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreSetActionResult } from './UserItemStoreSetActionResult';

export interface UserItemStoreSetActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  actionResult: UserItemStoreSetActionResult;
}

interface Options extends Omit<UserItemStoreSetActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreSetActionResult;
}

export function createUserItemStoreSetActionPayload (
  options: Options
): UserItemStoreSetActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
