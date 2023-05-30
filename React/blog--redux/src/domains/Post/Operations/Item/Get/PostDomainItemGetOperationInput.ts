import { type ItemGetOperationInput, createItemGetOperationInput } from '../../../../../common';

export interface PostDomainItemGetOperationInput extends ItemGetOperationInput {
  title?: string;
  topicId?: number | string;
}

export function createPostDomainItemGetOperationInput (
  options?: Partial<PostDomainItemGetOperationInput>
): PostDomainItemGetOperationInput {
  const base = createItemGetOperationInput(options);

  return {
    ...base,
    title: options?.title,
    topicId: options?.topicId,
  };
}
