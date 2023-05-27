import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainListGetOperationRequestHandler } from '../../../../../../domains';
import { type UserListStoreResource } from '../../UserListStoreResource';

export interface UserListStoreLoadActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserListStore: UserListStoreResource;
  readonly requestHandler: UserDomainListGetOperationRequestHandler;
}

export function createUserListStoreLoadActionData (
  options: UserListStoreLoadActionData
): UserListStoreLoadActionData {
  const {
    abortSignal,
    resourceOfApiResponse,
    resourceOfUserListStore,
    requestHandler,
    } = options;

  return {
    abortSignal,
    resourceOfApiResponse,
    resourceOfUserListStore,
    requestHandler,
  }
}
