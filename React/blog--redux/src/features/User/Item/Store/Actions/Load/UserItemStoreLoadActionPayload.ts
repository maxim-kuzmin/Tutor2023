import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreLoadActionResult } from './UserItemStoreLoadActionResult';

export interface UserItemStoreLoadActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  readonly actionResult: UserItemStoreLoadActionResult;
}

interface Options extends Omit<UserItemStoreLoadActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreLoadActionResult;
}

export function createUserItemStoreLoadActionPayload (
  options: Options
): UserItemStoreLoadActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
