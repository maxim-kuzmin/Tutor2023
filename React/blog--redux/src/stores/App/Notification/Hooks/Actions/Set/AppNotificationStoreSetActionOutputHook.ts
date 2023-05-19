import { useCallback } from 'react';
import {
  type AppNotificationStoreSliceName,
  type AppNotificationStoreSetActionInput,
  type AppNotificationStoreSetActionOutput,
  type AppNotificationStoreSetActionPayload,
} from '../../../../../../features';
import { useStoreState } from '../../AppNotificationStoreStateHook';
import { useStoreSetActionDispatch } from './AppNotificationStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: AppNotificationStoreSliceName,
  input: AppNotificationStoreSetActionInput
): AppNotificationStoreSetActionOutput {
  const { onActionCompleted } = input;

  const callback = useCallback(
    (payload: AppNotificationStoreSetActionPayload) => {
      if (onActionCompleted) {
        onActionCompleted(payload);
      }
    },
    [onActionCompleted]
  );

  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName, { callback });

  const { payloadOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    payloadOfSetAction
  };
}
