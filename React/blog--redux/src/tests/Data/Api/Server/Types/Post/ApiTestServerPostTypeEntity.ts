import { type PostTypeEntity, createPostTypeEntity } from '../../../../../../data';
import { createApiTestServerReactionTypeEntity } from '../Reaction';
import { createApiTestServerUserTypeEntity } from '../User';

export interface ApiTestServerPostTypeEntity extends Omit<PostTypeEntity, 'userId'> {
  comments: any[];
  reactions: any;
  user: any;
}

export function createApiTestServerPostTypeEntity (
  options?: Partial<ApiTestServerPostTypeEntity>
): ApiTestServerPostTypeEntity {
  const base = createPostTypeEntity(options);

  return {
    ...base,
    comments: options?.comments ?? [],
    reactions: options?.reactions ?? createApiTestServerReactionTypeEntity(),
    user: options?.user ?? createApiTestServerUserTypeEntity(),
  };
}
