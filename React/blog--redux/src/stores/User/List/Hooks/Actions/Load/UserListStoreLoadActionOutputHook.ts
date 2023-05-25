import { useCallback } from 'react';
import { StoreDispatchType, OperationStatus } from '../../../../../../common';
import {
  type UserListStoreSliceName,
  type UserListStoreLoadActionInput,
  type UserListStoreLoadActionOutput,
  type UserListStoreLoadCompletedActionResult,
} from '../../../../../../features';
import { useStoreState } from '../../UserListStoreStateHook';
import { useStoreLoadActionDispatch } from './UserListStoreLoadActionDispatchHook';

export function useStoreLoadActionOutput (
  sliceName: UserListStoreSliceName,
  input: UserListStoreLoadActionInput
): UserListStoreLoadActionOutput {
  const { abortController, onActionCompleted, resultOfLoadAction } = input;

  const callback = useCallback(
    (data: UserListStoreLoadCompletedActionResult) => {
      if (onActionCompleted) {
        onActionCompleted(data);
      }
    },
    [onActionCompleted]
  );

  const dispatchOfLoadAction = useStoreLoadActionDispatch(
    sliceName,
    {
      abortController,
      callback,
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
