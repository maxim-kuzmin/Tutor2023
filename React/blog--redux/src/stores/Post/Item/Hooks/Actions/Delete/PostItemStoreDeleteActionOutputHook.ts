import { OperationStatus } from '../../../../../../common';
import {
  type PostItemStoreDeleteActionInput,
  type PostItemStoreDeleteActionOutput,
  type PostItemStoreSliceName,
} from '../../../../../../features';
import { useStoreState } from '../../PostItemStoreStateHook';
import { useStoreDeleteActionDispatch } from './PostItemStoreDeleteActionDispatchHook';

export function useStoreDeleteActionOutput (
  sliceName: PostItemStoreSliceName,
  input: PostItemStoreDeleteActionInput = {}
): PostItemStoreDeleteActionOutput {
  const { abortController } = input;

  const dispatchOfDeleteAction = useStoreDeleteActionDispatch(sliceName, { abortController });

  const { resultOfDeleteCompletedAction, statusOfDeleteAction } = useStoreState(sliceName);

  return {
    dispatchOfDeleteAction,
    pendingOfDeleteAction: statusOfDeleteAction === OperationStatus.Pending,
    resultOfDeleteCompletedAction,
  };
}
