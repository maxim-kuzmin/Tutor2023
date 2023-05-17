import { type CommentTypeEntity, createCommentTypeEntity } from '../../data';

export interface CommentDomainEntity {
  data: CommentTypeEntity;
}

export function createCommentDomainEntity (options?: Partial<CommentDomainEntity>): CommentDomainEntity {
  return {
    data: options?.data ?? createCommentTypeEntity(),
  };
}
