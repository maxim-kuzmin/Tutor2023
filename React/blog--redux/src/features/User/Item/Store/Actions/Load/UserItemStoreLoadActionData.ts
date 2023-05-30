import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainItemGetOperationRequestHandler } from '../../../../../../domains';
import { type UserItemStoreResource } from '../../UserItemStoreResource';

export interface UserItemStoreLoadActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserItemStore: UserItemStoreResource;
  readonly requestHandler: UserDomainItemGetOperationRequestHandler;
}

export function createUserItemStoreLoadActionData (
  options: UserItemStoreLoadActionData
): UserItemStoreLoadActionData {
  const {
    abortSignal,
    resourceOfApiResponse,
    resourceOfUserItemStore,
    requestHandler,
    } = options;

  return {
    abortSignal,
    resourceOfApiResponse,
    resourceOfUserItemStore,
    requestHandler,
  }
}
