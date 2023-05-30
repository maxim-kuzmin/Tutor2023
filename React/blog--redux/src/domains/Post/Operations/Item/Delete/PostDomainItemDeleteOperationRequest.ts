import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput,
} from '../../../../../data';
import { type PostDomainItemGetOperationInput } from '../Get';

export interface PostDomainItemDeleteOperationRequest
  extends ApiRequestWithInput<PostDomainItemGetOperationInput> {}

export function createPostDomainItemDeleteOperationRequest (
  input: PostDomainItemGetOperationInput,
  options: ApiRequestCreationOptions
): PostDomainItemDeleteOperationRequest {
  return createApiRequestWithInput(input, options);
}
