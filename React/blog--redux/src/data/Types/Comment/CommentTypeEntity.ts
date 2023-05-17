export interface CommentTypeEntity {
  id: string;
  date: string;
  text: string;
  postId: string;
}

export function createCommentTypeEntity (options?: Partial<CommentTypeEntity>): CommentTypeEntity {
  return {
    id: options?.id ?? '',
    date: options?.date ?? '',
    text: options?.text ?? '',
    postId: options?.postId ?? '',
  };
}
