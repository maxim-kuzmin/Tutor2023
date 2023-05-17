import { type ReactionTypeEntity, createReactionTypeEntity } from '../../data';

export interface ReactionDomainEntity {
  data: ReactionTypeEntity;
}

export function createReactionDomainEntity (options?: Partial<ReactionDomainEntity>): ReactionDomainEntity {
  return {
    data: options?.data ?? createReactionTypeEntity(),
  };
}
