import { type ApiResponseResource } from '../../../../../../data';
import { type UserDomainItemSaveOperationRequestHandler } from '../../../../../../domains';
import { type UserItemStoreResource } from '../../UserItemStoreResource';

export interface UserItemStoreSaveActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfUserItemStore: UserItemStoreResource;
  readonly requestHandler: UserDomainItemSaveOperationRequestHandler;
}

export function createUserItemStoreSaveActionData (
  options: UserItemStoreSaveActionData
): UserItemStoreSaveActionData {
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
