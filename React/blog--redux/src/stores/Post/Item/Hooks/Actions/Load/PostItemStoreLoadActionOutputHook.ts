import { StoreDispatchType, OperationStatus } from '../../../../../../common';
import {
  type PostItemStoreSliceName,
  type PostItemStoreLoadActionInput,
  type PostItemStoreLoadActionOutput,
  } from '../../../../../../features';
import { useStoreState } from '../../PostItemStoreStateHook';
import { useStoreLoadActionDispatch } from './PostItemStoreLoadActionDispatchHook';

export function useStoreLoadActionOutput (
  sliceName: PostItemStoreSliceName,
  input: PostItemStoreLoadActionInput
): PostItemStoreLoadActionOutput {
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
