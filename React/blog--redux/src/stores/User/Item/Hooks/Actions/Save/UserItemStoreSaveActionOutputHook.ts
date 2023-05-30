import { OperationStatus } from '../../../../../../common';
import {
  type UserItemStoreSaveActionInput,
  type UserItemStoreSaveActionOutput,
  type UserItemStoreSliceName,
} from '../../../../../../features';
import { useStoreState } from '../../UserItemStoreStateHook';
import { useStoreSaveActionDispatch } from './UserItemStoreSaveActionDispatchHook';

export function useStoreSaveActionOutput (
  sliceName: UserItemStoreSliceName,
  input: UserItemStoreSaveActionInput = {}
): UserItemStoreSaveActionOutput {
  const { abortController } = input;

  const dispatchOfSaveAction = useStoreSaveActionDispatch(sliceName, { abortController });

  const { resultOfSaveCompletedAction, statusOfSaveAction } = useStoreState(sliceName);

  return {
    dispatchOfSaveAction,
    pendingOfSaveAction: statusOfSaveAction === OperationStatus.Pending,
    resultOfSaveCompletedAction,
  };
}
