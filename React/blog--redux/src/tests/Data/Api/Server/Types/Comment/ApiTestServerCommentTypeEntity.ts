import { type CommentTypeEntity, createCommentTypeEntity } from '../../../../../../data';
import { type ApiTestServerPostTypeEntity, createApiTestServerPostTypeEntity } from '../Post';

export interface ApiTestServerCommentTypeEntity extends Omit<CommentTypeEntity, 'postId'> {
  post: ApiTestServerPostTypeEntity;
}

export function createApiTestServerCommentTypeEntity (
  options?: Partial<ApiTestServerCommentTypeEntity>
): ApiTestServerCommentTypeEntity {
  const base = createCommentTypeEntity(options);

  return {
    ...base,
    post: options?.post ?? createApiTestServerPostTypeEntity(),
  };
}
