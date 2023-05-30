import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput,
} from '../../../../../data';
import { type UserDomainItemGetOperationInput } from '../Get';

export interface UserDomainItemDeleteOperationRequest
  extends ApiRequestWithInput<UserDomainItemGetOperationInput> {}

export function createUserDomainItemDeleteOperationRequest (
  input: UserDomainItemGetOperationInput,
  options: ApiRequestCreationOptions
): UserDomainItemDeleteOperationRequest {
  return createApiRequestWithInput(input, options);
}
