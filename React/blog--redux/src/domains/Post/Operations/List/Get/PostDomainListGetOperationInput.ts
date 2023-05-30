import { type ListGetOperationInput, createListGetOperationInput } from '../../../../../common';

export interface PostDomainListGetOperationInput extends ListGetOperationInput {
  ids?: number[];
  title?: string;
  topicId?: number;
  topicIds?: number[];
}

export function createPostDomainListGetOperationInput (
  options?: Partial<PostDomainListGetOperationInput>
): PostDomainListGetOperationInput {
  const base = createListGetOperationInput(options);

  return {
    ...base,
    ids: options?.ids,
    title: options?.title,
    topicId: options?.topicId,
    topicIds: options?.topicIds,
  };
}
