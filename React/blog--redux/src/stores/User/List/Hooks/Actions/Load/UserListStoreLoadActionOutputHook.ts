import { StoreDispatchType, OperationStatus } from '../../../../../../common';
import {
  type UserListStoreSliceName,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  } from '../../../../../../features';
import { useStoreState } from '../../UserListStoreStateHook';
import { useStoreLoadActionDispatch } from './UserListStoreLoadActionDispatchHook';

export function useStoreLoadActionOutput (
  sliceName: UserListStoreSliceName,
  input: UserListStoreLoadActionInput
): UserListStoreLoadActionOutput {
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
