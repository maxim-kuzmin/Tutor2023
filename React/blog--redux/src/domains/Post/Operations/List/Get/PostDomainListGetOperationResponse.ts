import {
  type ApiOperationResponse,
  type ApiOperationResponseWithData,
  createApiOperationResponseWithData,
} from '../../../../../data';
import { type PostDomainListGetOperationOutput } from './PostDomainListGetOperationOutput';

export interface PostDomainListGetOperationResponse
  extends ApiOperationResponseWithData<PostDomainListGetOperationOutput> {
}

export function createPostDomainListGetOperationResponse (
  options?: ApiOperationResponseWithData<PostDomainListGetOperationOutput> | ApiOperationResponse
): PostDomainListGetOperationResponse {
  return createApiOperationResponseWithData<PostDomainListGetOperationOutput>(options);
}
