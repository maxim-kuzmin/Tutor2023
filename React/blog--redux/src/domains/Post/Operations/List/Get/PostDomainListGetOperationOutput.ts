import { type ListGetOperationOutput, createListGetOperationOutput } from '../../../../../common';
import { type PostDomainEntity } from '../../../PostDomainEntity';

export interface PostDomainListGetOperationOutput extends ListGetOperationOutput<PostDomainEntity> {}

export function createPostDomainListGetOperationOutput (
  options?: Partial<PostDomainListGetOperationOutput>
): PostDomainListGetOperationOutput {
  return createListGetOperationOutput(options);
}
