import { type ItemGetOperationInput, createItemGetOperationInput } from '../../../../../common';

export interface UserDomainItemGetOperationInput extends ItemGetOperationInput {
  username?: string;
}

export function createUserDomainItemGetOperationInput (
  options?: Partial<UserDomainItemGetOperationInput>
): UserDomainItemGetOperationInput {
  const base = createItemGetOperationInput(options);

  return {
    ...base,
    username: options?.username,
  };
}
