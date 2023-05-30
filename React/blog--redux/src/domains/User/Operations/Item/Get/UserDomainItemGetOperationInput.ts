import { type ItemGetOperationInput, createItemGetOperationInput } from '../../../../../common';

export interface UserDomainItemGetOperationInput extends ItemGetOperationInput {
  title?: string;
  topicId?: number | string;
}

export function createUserDomainItemGetOperationInput (
  options?: Partial<UserDomainItemGetOperationInput>
): UserDomainItemGetOperationInput {
  const base = createItemGetOperationInput(options);

  return {
    ...base,
    title: options?.title,
    topicId: options?.topicId,
  };
}
