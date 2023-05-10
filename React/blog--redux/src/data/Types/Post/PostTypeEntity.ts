import { type PostTypeEntityForList, createPostTypeEntityForList } from './PostTypeEntityForList';

export interface PostTypeEntity extends PostTypeEntityForList {
  content: string;
}

export function createPostTypeEntity (options?: Partial<PostTypeEntity>): PostTypeEntity {
  const entityForList = createPostTypeEntityForList(options);

  return {
    ...entityForList,
    content: options?.content ?? '',
  }
}
