import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type UserItemStoreSliceName } from '../../Slice';
import { type UserItemStoreLoadCompletedActionResult } from './UserItemStoreLoadCompletedActionResult';

export interface UserItemStoreLoadCompletedActionPayload
  extends StoreActionPayload<UserItemStoreSliceName> {
  actionResult: UserItemStoreLoadCompletedActionResult;
}

interface Options extends Omit<UserItemStoreLoadCompletedActionPayload, 'actionResult'> {
  readonly actionResult?: UserItemStoreLoadCompletedActionResult;
}

export function createUserItemStoreLoadCompletedActionPayload (
  options: Options
): UserItemStoreLoadCompletedActionPayload {
  const { actionResult } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    actionResult: actionResult ?? null,
  };
}
