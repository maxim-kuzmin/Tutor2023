import { type ApiResponseResource } from '../../../../../../data';
import { type PostDomainListGetOperationRequestHandler } from '../../../../../../domains';
import { type PostListStoreResource } from '../../PostListStoreResource';

export interface PostListStoreLoadActionData {
  readonly abortSignal?: AbortSignal;
  readonly resourceOfApiResponse: ApiResponseResource;
  readonly resourceOfPostListStore: PostListStoreResource;
  readonly requestHandler: PostDomainListGetOperationRequestHandler;
}

export function createPostListStoreLoadActionData (
  options: PostListStoreLoadActionData
): PostListStoreLoadActionData {
  const {
    abortSignal,
    resourceOfApiResponse,
    resourceOfPostListStore,
    requestHandler,
    } = options;

  return {
    abortSignal,
    resourceOfApiResponse,
    resourceOfPostListStore,
    requestHandler,
  }
}
