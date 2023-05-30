import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreSaveActionResult } from './UserItemStoreSaveActionResult';

export interface UserItemStoreSaveActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  readonly actionResult: UserItemStoreSaveActionResult;
}

interface Options extends Omit<UserItemStoreSaveActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreSaveActionResult;
}

export function createUserItemStoreSaveActionPayload (
  options: Options
): UserItemStoreSaveActionPayload {
  const {
    actionResult,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
