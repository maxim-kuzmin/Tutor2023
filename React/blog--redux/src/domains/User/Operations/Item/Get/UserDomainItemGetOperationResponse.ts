import {
  type ApiOperationResponse,
  type ApiOperationResponseWithData,
  createApiOperationResponseWithData,
} from '../../../../../data';
import { type UserDomainItemGetOperationOutput } from './UserDomainItemGetOperationOutput';

export interface UserDomainItemGetOperationResponse
  extends ApiOperationResponseWithData<UserDomainItemGetOperationOutput> {
}

export function createUserDomainItemGetOperationResponse (
  options?: ApiOperationResponseWithData<UserDomainItemGetOperationOutput> | ApiOperationResponse
): UserDomainItemGetOperationResponse {
  return createApiOperationResponseWithData<UserDomainItemGetOperationOutput>(options);
}
