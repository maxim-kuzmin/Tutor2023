import { OperationStatus } from '../../../../common';
import {
  type UserListStoreLoadActionResult,
  type UserListStoreLoadCompletedActionResult,
  type UserListStoreSetActionResult
} from './Actions';

export interface UserListStoreState {
  resultOfLoadAction: UserListStoreLoadActionResult;
  resultOfLoadCompletedAction: UserListStoreLoadCompletedActionResult;
  resultOfSetAction: UserListStoreSetActionResult;
  statusOfLoadAction: OperationStatus;
}

export function createUserListStoreState (
  options?: Partial<UserListStoreState>
): UserListStoreState {
  return {
    resultOfLoadAction: options?.resultOfLoadAction ?? null,
    resultOfLoadCompletedAction: options?.resultOfLoadCompletedAction ?? null,
    resultOfSetAction: options?.resultOfSetAction ?? null,
    statusOfLoadAction: options?.statusOfLoadAction ?? OperationStatus.Initial,
  };
}
