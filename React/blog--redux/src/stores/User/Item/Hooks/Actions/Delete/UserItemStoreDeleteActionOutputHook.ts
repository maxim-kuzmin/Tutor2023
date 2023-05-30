import { OperationStatus } from '../../../../../../common';
import {
  type UserItemStoreDeleteActionInput,
  type UserItemStoreDeleteActionOutput,
  type UserItemStoreSliceName,
} from '../../../../../../features';
import { useStoreState } from '../../UserItemStoreStateHook';
import { useStoreDeleteActionDispatch } from './UserItemStoreDeleteActionDispatchHook';

export function useStoreDeleteActionOutput (
  sliceName: UserItemStoreSliceName,
  input: UserItemStoreDeleteActionInput = {}
): UserItemStoreDeleteActionOutput {
  const { abortController } = input;

  const dispatchOfDeleteAction = useStoreDeleteActionDispatch(sliceName, { abortController });

  const { resultOfDeleteCompletedAction, statusOfDeleteAction } = useStoreState(sliceName);

  return {
    dispatchOfDeleteAction,
    pendingOfDeleteAction: statusOfDeleteAction === OperationStatus.Pending,
    resultOfDeleteCompletedAction,
  };
}
