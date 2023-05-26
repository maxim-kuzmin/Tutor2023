import { type ListGetOperationInput, createListGetOperationInput } from '../../../../../common';

export interface UserDomainListGetOperationInput extends ListGetOperationInput {
  ids?: number[];
}

export function createUserDomainListGetOperationInput (
  options?: Partial<UserDomainListGetOperationInput>
): UserDomainListGetOperationInput {
  const base = createListGetOperationInput(options);

  return {
    ...base,
    ids: options?.ids,
  };
}
