import { type ApiResponseResource } from '../../../../../../data';
import { type PostDomainItemSaveOperationRequestHandler } from '../../../../../../domains';
import { type PostItemStoreResource } from '../../PostItemStoreResource';

export interface PostItemStoreSaveActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfPostItemStore: PostItemStoreResource;
  readonly requestHandler: PostDomainItemSaveOperationRequestHandler;
}

export function createPostItemStoreSaveActionData (
  options: PostItemStoreSaveActionData
): PostItemStoreSaveActionData {
  const {
    abortSignal,
    resourceOfApiResponse,
    resourceOfPostItemStore,
    requestHandler,
    } = options;

  return {
    abortSignal,
    resourceOfApiResponse,
    resourceOfPostItemStore,
    requestHandler,
  }
}
