import { OperationStatus } from '../../../../common';
import {
  type PostItemStoreDeleteActionResult,
  type PostItemStoreDeleteCompletedActionResult,
  type PostItemStoreLoadActionResult,
  type PostItemStoreLoadCompletedActionResult,
  type PostItemStoreSaveActionResult,
  type PostItemStoreSaveCompletedActionResult,
  type PostItemStoreSetActionResult,
} from './Actions';

export interface PostItemStoreState {
  resultOfDeleteAction: PostItemStoreDeleteActionResult;
  resultOfDeleteCompletedAction: PostItemStoreDeleteCompletedActionResult;
  resultOfLoadAction: PostItemStoreLoadActionResult;
  resultOfLoadCompletedAction: PostItemStoreLoadCompletedActionResult;
  resultOfSaveAction: PostItemStoreSaveActionResult;
  resultOfSaveCompletedAction: PostItemStoreSaveCompletedActionResult;
  resultOfSetAction: PostItemStoreSetActionResult;
  statusOfDeleteAction: OperationStatus;
  statusOfLoadAction: OperationStatus;
  statusOfSaveAction: OperationStatus;
}

export function createPostItemStoreState (
  options?: Partial<PostItemStoreState>
): PostItemStoreState {
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
