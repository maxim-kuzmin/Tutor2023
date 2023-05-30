import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreDeleteCompletedActionResult } from './UserItemStoreDeleteCompletedActionResult';

export interface UserItemStoreDeleteCompletedActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  actionResult: UserItemStoreDeleteCompletedActionResult;
}

interface Options extends Omit<UserItemStoreDeleteCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreDeleteCompletedActionResult;
}

export function createUserItemStoreDeleteCompletedActionPayload (
  options: Options
): UserItemStoreDeleteCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
