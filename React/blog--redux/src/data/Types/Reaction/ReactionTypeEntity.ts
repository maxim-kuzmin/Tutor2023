export interface ReactionTypeEntity {
  id: string;
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
  postId: string;
}

export function createReactionTypeEntity (options?: Partial<ReactionTypeEntity>): ReactionTypeEntity {
  return {
    id: options?.id ?? '',
    thumbsUp: options?.thumbsUp ?? 0,
    hooray: options?.hooray ?? 0,
    heart: options?.heart ?? 0,
    rocket: options?.rocket ?? 0,
    eyes: options?.eyes ?? 0,
    postId: options?.postId ?? '',
  };
}
