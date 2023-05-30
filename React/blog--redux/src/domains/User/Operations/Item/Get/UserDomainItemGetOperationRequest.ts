import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput
} from '../../../../../data';
import { type UserDomainItemGetOperationInput } from './UserDomainItemGetOperationInput';

export interface UserDomainItemGetOperationRequest
  extends ApiRequestWithInput<UserDomainItemGetOperationInput> {}

export function createUserDomainItemGetOperationRequest (
  input: UserDomainItemGetOperationInput,
  options: ApiRequestCreationOptions
): UserDomainItemGetOperationRequest {
  return createApiRequestWithInput(input, options);
}
