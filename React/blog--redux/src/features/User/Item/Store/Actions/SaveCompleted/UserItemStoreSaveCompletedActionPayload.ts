import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreSaveCompletedActionResult } from './UserItemStoreSaveCompletedActionResult';

export interface UserItemStoreSaveCompletedActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  actionResult: UserItemStoreSaveCompletedActionResult;
}

interface Options extends Omit<UserItemStoreSaveCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreSaveCompletedActionResult;
}

export function createUserItemStoreSaveCompletedActionPayload (
  options: Options
): UserItemStoreSaveCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
