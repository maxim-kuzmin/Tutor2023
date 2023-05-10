export interface PostTypeEntityForList {
  id: number;
  title: string;
}

export function createPostTypeEntityForList (options?: Partial<PostTypeEntityForList>): PostTypeEntityForList {
  return {
    id: options?.id ?? 0,
    title: options?.title ?? '',
  }
}
