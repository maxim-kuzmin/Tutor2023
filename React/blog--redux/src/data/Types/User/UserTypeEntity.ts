export interface UserTypeEntity {
  id: string;
  name: string;
}

export function createUserTypeEntity (options?: Partial<UserTypeEntity>): UserTypeEntity {
  return {
    id: options?.id ?? '',
    name: options?.name ?? '',
  };
}
