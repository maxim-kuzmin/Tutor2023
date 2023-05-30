import { type ApiResponseResource } from '../../../../../../data';
import { type PostDomainItemDeleteOperationRequestHandler } from '../../../../../../domains';
import { type PostItemStoreResource } from '../../PostItemStoreResource';

export interface PostItemStoreDeleteActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfPostItemStore: PostItemStoreResource;
  readonly requestHandler: PostDomainItemDeleteOperationRequestHandler;
}

export function createPostItemStoreDeleteActionData (
  options: PostItemStoreDeleteActionData
): PostItemStoreDeleteActionData {
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
