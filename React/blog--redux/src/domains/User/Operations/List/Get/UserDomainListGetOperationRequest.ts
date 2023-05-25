import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  createApiRequestWithInput
} from '../../../../../data';
import { type UserDomainListGetOperationInput } from './UserDomainListGetOperationInput';

export interface UserDomainListGetOperationRequest
  extends ApiRequestWithInput<UserDomainListGetOperationInput> {}

export function createUserDomainListGetOperationRequest (
  input: UserDomainListGetOperationInput,
  options: ApiRequestCreationOptions
): UserDomainListGetOperationRequest {
  return createApiRequestWithInput(input, options);
}
