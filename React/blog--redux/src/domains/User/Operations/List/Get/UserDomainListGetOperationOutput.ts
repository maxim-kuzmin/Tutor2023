import { type ListGetOperationOutput, createListGetOperationOutput } from '../../../../../common';
import { type UserDomainEntity } from '../../../UserDomainEntity';

export interface UserDomainListGetOperationOutput extends ListGetOperationOutput<UserDomainEntity> {}

export function createUserDomainListGetOperationOutput (
  options?: Partial<UserDomainListGetOperationOutput>
): UserDomainListGetOperationOutput {
  return createListGetOperationOutput(options);
}
