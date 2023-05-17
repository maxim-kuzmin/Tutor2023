import { type PostTypeEntity, createPostTypeEntity } from '../../../../Types';
import { createApiServerReactionTypeEntity } from '../Reaction';
import { createApiServerUserTypeEntity } from '../User';

export interface ApiServerPostTypeEntity extends Omit<PostTypeEntity, 'userId'> {
  comments: any[];
  reactions: any;
  user: any;
}

export function createApiServerPostTypeEntity (
  options?: Partial<ApiServerPostTypeEntity>
): ApiServerPostTypeEntity {
  const base = createPostTypeEntity(options);

  return {
    ...base,
    comments: options?.comments ?? [],
    reactions: options?.reactions ?? createApiServerReactionTypeEntity(),
    user: options?.user ?? createApiServerUserTypeEntity(),
  };
}
