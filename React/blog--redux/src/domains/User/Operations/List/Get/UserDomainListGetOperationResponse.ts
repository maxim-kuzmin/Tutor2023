import {
  type ApiOperationResponseWithData,
  createApiOperationResponseWithData,
  type ApiOperationResponse
} from '../../../../../data';
import { type UserDomainListGetOperationOutput } from './UserDomainListGetOperationOutput';

export interface UserDomainListGetOperationResponse
  extends ApiOperationResponseWithData<UserDomainListGetOperationOutput> {
}

export function createUserDomainListGetOperationResponse (
  options?: ApiOperationResponseWithData<UserDomainListGetOperationOutput> | ApiOperationResponse
): UserDomainListGetOperationResponse {
  return createApiOperationResponseWithData<UserDomainListGetOperationOutput>(options);
}
