export interface PostTypeEntity {
  id: string;
  title: string;
  content: string;
  date: string;
  userId: string;
}

export function createPostTypeEntity (options?: Partial<PostTypeEntity>): PostTypeEntity {
  return {
    id: options?.id ?? '',
    title: options?.title ?? '',
    content: options?.content ?? '',
    date: options?.date ?? '',
    userId: options?.userId ?? '',
  }
}
