export interface PostDomainReactionsValueObject {
  thumbsUp: number;
  hooray: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export function createPostDomainReactionsValueObject (
  options?: Partial<PostDomainReactionsValueObject>
): PostDomainReactionsValueObject {
  return {
    thumbsUp: options?.thumbsUp ?? 0,
    hooray: options?.hooray ?? 0,
    heart: options?.heart ?? 0,
    rocket: options?.rocket ?? 0,
    eyes: options?.eyes ?? 0,
  };
}
