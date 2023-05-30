import { OperationStatus } from '../../../../../../common';
import {
  type PostItemStoreSaveActionInput,
  type PostItemStoreSaveActionOutput,
  type PostItemStoreSliceName,
} from '../../../../../../features';
import { useStoreState } from '../../PostItemStoreStateHook';
import { useStoreSaveActionDispatch } from './PostItemStoreSaveActionDispatchHook';

export function useStoreSaveActionOutput (
  sliceName: PostItemStoreSliceName,
  input: PostItemStoreSaveActionInput = {}
): PostItemStoreSaveActionOutput {
  const { abortController } = input;

  const dispatchOfSaveAction = useStoreSaveActionDispatch(sliceName, { abortController });

  const { resultOfSaveCompletedAction, statusOfSaveAction } = useStoreState(sliceName);

  return {
    dispatchOfSaveAction,
    pendingOfSaveAction: statusOfSaveAction === OperationStatus.Pending,
    resultOfSaveCompletedAction,
  };
}
