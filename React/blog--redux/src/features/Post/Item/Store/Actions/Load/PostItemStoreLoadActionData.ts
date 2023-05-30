import { type ApiResponseResource } from '../../../../../../data';
import { type PostDomainItemGetOperationRequestHandler } from '../../../../../../domains';
import { type PostItemStoreResource } from '../../PostItemStoreResource';

export interface PostItemStoreLoadActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfPostItemStore: PostItemStoreResource;
  readonly requestHandler: PostDomainItemGetOperationRequestHandler;
}

export function createPostItemStoreLoadActionData (
  options: PostItemStoreLoadActionData
): PostItemStoreLoadActionData {
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
