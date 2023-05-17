import { type ReactionTypeEntity, createReactionTypeEntity } from '../../../../Types';
import { createApiServerPostTypeEntity } from '../Post';

export interface ApiServerReactionTypeEntity extends Omit<ReactionTypeEntity, 'postId'> {
  post: any;
}

export function createApiServerReactionTypeEntity (
  options?: Partial<ApiServerReactionTypeEntity>
): ApiServerReactionTypeEntity {
  const base = createReactionTypeEntity(options);

  return {
    ...base,
    post: options?.post ?? createApiServerPostTypeEntity(),
  };
}
