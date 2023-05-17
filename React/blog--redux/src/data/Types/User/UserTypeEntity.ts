export interface UserTypeEntity {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  username: string;
}

export function createUserTypeEntity (options?: Partial<UserTypeEntity>): UserTypeEntity {
  return {
    id: options?.id ?? '',
    firstName: options?.firstName ?? '',
    lastName: options?.lastName ?? '',
    name: options?.name ?? '',
    username: options?.username ?? '',
  };
}
