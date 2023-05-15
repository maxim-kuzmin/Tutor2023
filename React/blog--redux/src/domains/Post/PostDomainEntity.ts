import { type PostTypeEntity, createPostTypeEntity } from '../../data';
import {
  type PostDomainReactionsValueObject,
  createPostDomainReactionsValueObject
} from './ValueObjects';

export interface PostDomainEntity {
  data: PostTypeEntity;
  reactions: PostDomainReactionsValueObject;
}

export function createPostDomainEntity (options?: Partial<PostDomainEntity>): PostDomainEntity {
  return {
    data: options?.data ?? createPostTypeEntity(),
    reactions: options?.reactions ?? createPostDomainReactionsValueObject(),
  };
}
