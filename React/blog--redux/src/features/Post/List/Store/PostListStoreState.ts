import { OperationStatus } from '../../../../common';
import {
  type PostListStoreLoadActionResult,
  type PostListStoreLoadCompletedActionResult,
  type PostListStoreSetActionResult
} from './Actions';

export interface PostListStoreState {
  resultOfLoadAction: PostListStoreLoadActionResult;
  resultOfLoadCompletedAction: PostListStoreLoadCompletedActionResult;
  resultOfSetAction: PostListStoreSetActionResult;
  statusOfLoadAction: OperationStatus;
}

export function createPostListStoreState (
  options?: Partial<PostListStoreState>
): PostListStoreState {
  return {
    resultOfLoadAction: options?.resultOfLoadAction ?? null,
    resultOfLoadCompletedAction: options?.resultOfLoadCompletedAction ?? null,
    resultOfSetAction: options?.resultOfSetAction ?? null,
    statusOfLoadAction: options?.statusOfLoadAction ?? OperationStatus.Initial,
  };
}
