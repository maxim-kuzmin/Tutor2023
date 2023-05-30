import { StoreDispatchType, OperationStatus } from '../../../../../../common';
import {
  type UserItemStoreSliceName,
  type UserItemStoreLoadActionInput,
  type UserItemStoreLoadActionOutput,
  } from '../../../../../../features';
import { useStoreState } from '../../UserItemStoreStateHook';
import { useStoreLoadActionDispatch } from './UserItemStoreLoadActionDispatchHook';

export function useStoreLoadActionOutput (
  sliceName: UserItemStoreSliceName,
  input: UserItemStoreLoadActionInput
): UserItemStoreLoadActionOutput {
  const { abortController, resultOfLoadAction } = input;

  const dispatchOfLoadAction = useStoreLoadActionDispatch(
    sliceName,
    {
      abortController,
      dispatchType: StoreDispatchType.MountOrUpdate,
      resultOfLoadAction
    }
  );

  const { resultOfLoadCompletedAction, statusOfLoadAction } = useStoreState(sliceName);

  return {
    dispatchOfLoadAction,
    pendingOfLoadAction: statusOfLoadAction === OperationStatus.Pending,
    resultOfLoadCompletedAction,
  };
}
