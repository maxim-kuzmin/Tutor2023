import { type ItemGetOperationInput, createItemGetOperationInput } from '../../../../../common';

export interface PostDomainItemGetOperationInput extends ItemGetOperationInput {}

export function createPostDomainItemGetOperationInput (
  options?: Partial<PostDomainItemGetOperationInput>
): PostDomainItemGetOperationInput {
  return createItemGetOperationInput(options);
}
