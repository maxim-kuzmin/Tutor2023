import { type UserTypeEntity, createUserTypeEntity } from '../../../../Types';

export interface ApiServerUserTypeEntity extends UserTypeEntity {
  posts: any[];
}

export function createApiServerUserTypeEntity (
  options?: Partial<ApiServerUserTypeEntity>
): ApiServerUserTypeEntity {
  const base = createUserTypeEntity(options);

  return {
    ...base,
    posts: options?.posts ?? []
  };
}
