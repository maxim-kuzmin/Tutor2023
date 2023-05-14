export interface PostTypeEntityForList {
  id: string;
  title: string;
}

export function createPostTypeEntityForList (options?: Partial<PostTypeEntityForList>): PostTypeEntityForList {
  return {
    id: options?.id ?? '',
    title: options?.title ?? '',
  }
}
