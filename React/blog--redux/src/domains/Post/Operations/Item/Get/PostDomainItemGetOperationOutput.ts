import { type ItemGetOperationOutput, createItemGetOperationOutput } from '../../../../../common';
import { type PostDomainEntity } from '../../../PostDomainEntity';

export interface PostDomainItemGetOperationOutput extends ItemGetOperationOutput<PostDomainEntity> {}

export function createPostDomainItemGetOperationOutput (
  options: PostDomainItemGetOperationOutput
): PostDomainItemGetOperationOutput {
  return createItemGetOperationOutput(options);
}
