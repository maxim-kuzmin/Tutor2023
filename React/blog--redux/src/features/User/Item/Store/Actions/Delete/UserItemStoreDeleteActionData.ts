import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainItemDeleteOperationRequestHandler } from '../../../../../../domains';
import { type UserItemStoreResource } from '../../UserItemStoreResource';

export interface UserItemStoreDeleteActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserItemStore: UserItemStoreResource;
  readonly requestHandler: UserDomainItemDeleteOperationRequestHandler;
}

export function createUserItemStoreDeleteActionData (
  options: UserItemStoreDeleteActionData
): UserItemStoreDeleteActionData {
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
