import { useCallback } from 'react';
import {
  type UserListStoreSliceName,
  type UserListStoreSetActionResult,
  type UserListStoreSetActionInput,
  type UserListStoreSetActionOutput,
} from '../../../../../../features';
import { useStoreState } from '../../UserListStoreStateHook';
import { useStoreSetActionDispatch } from './UserListStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: UserListStoreSliceName,
  input: UserListStoreSetActionInput
): UserListStoreSetActionOutput {
  const { onActionCompleted } = input;

  const callback = useCallback(
    (data: UserListStoreSetActionResult) => {
      if (onActionCompleted) {
        onActionCompleted(data);
      }
    },
    [onActionCompleted]
  );

  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName, { callback });

  const { resultOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    resultOfSetAction,
  };
}
