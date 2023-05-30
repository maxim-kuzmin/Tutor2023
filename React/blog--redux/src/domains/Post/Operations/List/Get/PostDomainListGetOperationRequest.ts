import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput
} from '../../../../../data';
import { type PostDomainListGetOperationInput } from './PostDomainListGetOperationInput';

export interface PostDomainListGetOperationRequest
  extends ApiRequestWithInput<PostDomainListGetOperationInput> {}

export function createPostDomainListGetOperationRequest (
  input: PostDomainListGetOperationInput,
  options: ApiRequestCreationOptions
): PostDomainListGetOperationRequest {
  return createApiRequestWithInput(input, options);
}
