import { type UserTypeEntity, createUserTypeEntity } from '../../../../../../data';

export interface ApiTestServerUserTypeEntity extends UserTypeEntity {
  posts: any[];
}

export function createApiTestServerUserTypeEntity (
  options?: Partial<ApiTestServerUserTypeEntity>
): ApiTestServerUserTypeEntity {
  const base = createUserTypeEntity(options);

  return {
    ...base,
    posts: options?.posts ?? []
  };
}
