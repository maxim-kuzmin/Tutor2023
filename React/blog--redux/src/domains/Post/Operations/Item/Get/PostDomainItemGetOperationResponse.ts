import {
  type ApiOperationResponse,
  type ApiOperationResponseWithData,
  createApiOperationResponseWithData,
} from '../../../../../data';
import { type PostDomainItemGetOperationOutput } from './PostDomainItemGetOperationOutput';

export interface PostDomainItemGetOperationResponse
  extends ApiOperationResponseWithData<PostDomainItemGetOperationOutput> {
}

export function createPostDomainItemGetOperationResponse (
  options?: ApiOperationResponseWithData<PostDomainItemGetOperationOutput> | ApiOperationResponse
): PostDomainItemGetOperationResponse {
  return createApiOperationResponseWithData<PostDomainItemGetOperationOutput>(options);
}
