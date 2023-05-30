import { type ItemGetOperationOutput, createItemGetOperationOutput } from '../../../../../common';
import { type UserDomainEntity } from '../../../UserDomainEntity';

export interface UserDomainItemGetOperationOutput extends ItemGetOperationOutput<UserDomainEntity> {}

export function createUserDomainItemGetOperationOutput (
  options: UserDomainItemGetOperationOutput
): UserDomainItemGetOperationOutput {
  return createItemGetOperationOutput(options);
}
