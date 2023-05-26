import { type StoreActionPayload, createStoreActionPayload } from '../../../../../../common';
import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainListGetOperationRequestHandler } from '../../../../../../domains';
import { type UserListStoreResource } from '../../UserListStoreResource';
import { type UserListStoreSliceName } from '../../Slice';
import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionPayload
  extends StoreActionPayload<UserListStoreSliceName> {
  readonly abortSignal?: AbortSignal;
  readonly actionResult: UserListStoreLoadActionResult;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserListStore: UserListStoreResource;
  readonly requestHandler: UserDomainListGetOperationRequestHandler;
}

interface Options extends Omit<UserListStoreLoadActionPayload, 'actionResult'> {
  readonly actionResult?: UserListStoreLoadActionResult;
}

export function createUserListStoreLoadActionPayload (
  options: Options
): UserListStoreLoadActionPayload {
  const {
    abortSignal,
    actionResult,
    resourceOfApiResponse,
    resourceOfUserListStore,
    requestHandler,
  } = options;

  const base = createStoreActionPayload(options);

  return {
    ...base,
    abortSignal,
    actionResult: actionResult ?? null,
    resourceOfApiResponse,
    resourceOfUserListStore,
    requestHandler,
  };
}
