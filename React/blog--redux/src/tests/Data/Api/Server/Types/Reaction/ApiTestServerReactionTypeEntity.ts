import { type ReactionTypeEntity, createReactionTypeEntity } from '../../../../../../data';
import { createApiTestServerPostTypeEntity } from '../Post';

export interface ApiTestServerReactionTypeEntity extends Omit<ReactionTypeEntity, 'postId'> {
  post: any;
}

export function createApiTestServerReactionTypeEntity (
  options?: Partial<ApiTestServerReactionTypeEntity>
): ApiTestServerReactionTypeEntity {
  const base = createReactionTypeEntity(options);

  return {
    ...base,
    post: options?.post ?? createApiTestServerPostTypeEntity(),
  };
}
