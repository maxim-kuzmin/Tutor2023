import { useCallback } from 'react';
import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreSliceName,
  type UserListStoreClearActionInput,
  type UserListStoreClearActionOutput
} from '../../../../../../features';
import { useStoreClearActionDispatch } from './UserListStoreClearActionDispatchHook';

export function useStoreClearActionOutput (
  sliceName: UserListStoreSliceName,
  input: UserListStoreClearActionInput
): UserListStoreClearActionOutput {
  const { onActionCompleted } = input;

  const callback = useCallback(
    () => {
      if (onActionCompleted) {
        onActionCompleted();
      }
    },
    [onActionCompleted]
  );

  const dispatchOfClearAction = useStoreClearActionDispatch(
    sliceName,
    {
      callback,
      dispatchType: StoreDispatchType.Unmount
    }
  );

  return {
    dispatchOfClearAction
  };
}
