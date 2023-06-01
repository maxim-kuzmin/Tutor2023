import { type ListGetOperationInput, createListGetOperationInput } from '../../../../../common';

export interface PostDomainListGetOperationInput extends ListGetOperationInput {
  ids?: number[];
}

export function createPostDomainListGetOperationInput (
  options?: Partial<PostDomainListGetOperationInput>
): PostDomainListGetOperationInput {
  const base = createListGetOperationInput(options);

  return {
    ...base,
    ids: options?.ids,
  };
}
