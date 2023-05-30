import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreDeleteActionResult } from './UserItemStoreDeleteActionResult';

export interface UserItemStoreDeleteActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  readonly actionResult: UserItemStoreDeleteActionResult;
}

interface Options extends Omit<UserItemStoreDeleteActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreDeleteActionResult;
}

export function createUserItemStoreDeleteActionPayload (
  options: Options
): UserItemStoreDeleteActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
