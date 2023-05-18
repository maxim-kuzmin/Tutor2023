import { OperationStatus } from '../../../../common';
import { type UserListStoreSetActionPayload } from './Actions';

export interface UserListStoreState {
  payloadOfSetAction: UserListStoreSetActionPayload;
  statusOfLoadAction: OperationStatus;
}

export function createUserListStoreState (
  options?: Partial<UserListStoreState>
): UserListStoreState {
  return {
    payloadOfSetAction: options?.payloadOfSetAction ?? null,
    statusOfLoadAction: options?.statusOfLoadAction ?? OperationStatus.Initial,
  };
}
