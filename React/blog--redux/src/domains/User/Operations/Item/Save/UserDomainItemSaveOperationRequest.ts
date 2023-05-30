import {
  type ApiRequestCreationOptions,
  type ApiRequestWithInput,
  type UserTypeEntity,
  createApiRequestWithInput
} from '../../../../../data';

export interface UserDomainItemSaveOperationRequest extends ApiRequestWithInput<UserTypeEntity> {}

export function createUserDomainItemSaveOperationRequest (
  input: UserTypeEntity,
  options: ApiRequestCreationOptions
): UserDomainItemSaveOperationRequest {
  return createApiRequestWithInput(input, options);
}
