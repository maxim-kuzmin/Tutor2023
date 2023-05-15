import { type UserTypeEntity, createUserTypeEntity } from '../../data';

export interface UserDomainEntity {
  data: UserTypeEntity;
}

export function createUserDomainEntity (options?: Partial<UserDomainEntity>): UserDomainEntity {
  return {
    data: options?.data ?? createUserTypeEntity(),
  };
}
