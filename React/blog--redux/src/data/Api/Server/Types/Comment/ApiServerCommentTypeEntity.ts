import { type CommentTypeEntity, createCommentTypeEntity } from '../../../../Types';
import { type ApiServerPostTypeEntity, createApiServerPostTypeEntity } from '../Post';

export interface ApiServerCommentTypeEntity extends Omit<CommentTypeEntity, 'postId'> {
  post: ApiServerPostTypeEntity;
}

export function createApiServerCommentTypeEntity (
  options?: Partial<ApiServerCommentTypeEntity>
): ApiServerCommentTypeEntity {
  const base = createCommentTypeEntity(options);

  return {
    ...base,
    post: options?.post ?? createApiServerPostTypeEntity(),
  };
}
