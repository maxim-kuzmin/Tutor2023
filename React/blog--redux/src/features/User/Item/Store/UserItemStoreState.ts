import { OperationStatus } from '../../../../common';
import {
  type UserItemStoreDeleteActionResult,
  type UserItemStoreDeleteCompletedActionResult,
  type UserItemStoreLoadActionResult,
  type UserItemStoreLoadCompletedActionResult,
  type UserItemStoreSaveActionResult,
  type UserItemStoreSaveCompletedActionResult,
  type UserItemStoreSetActionResult,
} from './Actions';

export interface UserItemStoreState {
  resultOfDeleteAction: UserItemStoreDeleteActionResult;
  resultOfDeleteCompletedAction: UserItemStoreDeleteCompletedActionResult;
  resultOfLoadAction: UserItemStoreLoadActionResult;
  resultOfLoadCompletedAction: UserItemStoreLoadCompletedActionResult;
  resultOfSaveAction: UserItemStoreSaveActionResult;
  resultOfSaveCompletedAction: UserItemStoreSaveCompletedActionResult;
  resultOfSetAction: UserItemStoreSetActionResult;
  statusOfDeleteAction: OperationStatus;
  statusOfLoadAction: OperationStatus;
  statusOfSaveAction: OperationStatus;
}

export function createUserItemStoreState (
  options?: Partial<UserItemStoreState>
): UserItemStoreState {
  return {
    resultOfDeleteAction: options?.resultOfDeleteAction ?? null,
    resultOfDeleteCompletedAction: options?.resultOfDeleteCompletedAction ?? null,
    resultOfLoadAction: options?.resultOfLoadAction ?? null,
    resultOfLoadCompletedAction: options?.resultOfLoadCompletedAction ?? null,
    resultOfSaveAction: options?.resultOfSaveAction ?? null,
    resultOfSaveCompletedAction: options?.resultOfSaveCompletedAction ?? null,
    resultOfSetAction: options?.resultOfSetAction ?? null,
    statusOfDeleteAction: options?.statusOfDeleteAction ?? OperationStatus.Initial,
    statusOfLoadAction: options?.statusOfLoadAction ?? OperationStatus.Initial,
    statusOfSaveAction: options?.statusOfSaveAction ?? OperationStatus.Initial,
  };
}
