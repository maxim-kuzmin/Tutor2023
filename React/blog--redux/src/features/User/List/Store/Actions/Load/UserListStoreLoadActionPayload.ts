import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainListGetOperationRequestHandler } from '../../../../../../domains';
import { type UserListStoreResource } from '../../UserListStoreResource';
import { type UserListStoreLoadActionResult } from './UserListStoreLoadActionResult';

export interface UserListStoreLoadActionPayload {
  readonly abortSignal?: AbortSignal;
  readonly actionResult: UserListStoreLoadActionResult;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserListStore: UserListStoreResource;
  readonly requestHandler: UserDomainListGetOperationRequestHandler;
}

export function createUserListStoreLoadActionPayload (
  options?: Partial<UserListStoreLoadActionPayload>
): UserListStoreLoadActionPayload {
  if (!options?.resourceOfApiResponse) {
    throw new Error('resourceOfApiResponse is undefined');
  }

  if (!options?.resourceOfUserListStore) {
    throw new Error('resourceOfUserListStore is undefined');
  }

  if (!options?.requestHandler) {
    throw new Error('requestHandler is undefined');
  }

  return {
    abortSignal: options?.abortSignal,
    actionResult: options?.actionResult ?? null,
    resourceOfApiResponse: options?.resourceOfApiResponse,
    resourceOfUserListStore: options?.resourceOfUserListStore,
    requestHandler: options?.requestHandler,
  };
}
