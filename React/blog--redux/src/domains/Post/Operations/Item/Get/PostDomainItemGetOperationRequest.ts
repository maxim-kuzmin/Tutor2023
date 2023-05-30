import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput
} from '../../../../../data';
import { type PostDomainItemGetOperationInput } from './PostDomainItemGetOperationInput';

export interface PostDomainItemGetOperationRequest
  extends ApiRequestWithInput<PostDomainItemGetOperationInput> {}

export function createPostDomainItemGetOperationRequest (
  input: PostDomainItemGetOperationInput,
  options: ApiRequestCreationOptions
): PostDomainItemGetOperationRequest {
  return createApiRequestWithInput(input, options);
}
