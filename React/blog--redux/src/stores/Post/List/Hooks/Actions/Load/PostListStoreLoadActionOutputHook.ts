import { StoreDispatchType, OperationStatus } from '../../../../../../common';
import {
  type PostListStoreSliceName,
  type PostListStoreLoadActionInput,
  type PostListStoreLoadActionOutput,
  } from '../../../../../../features';
import { useStoreState } from '../../PostListStoreStateHook';
import { useStoreLoadActionDispatch } from './PostListStoreLoadActionDispatchHook';

export function useStoreLoadActionOutput (
  sliceName: PostListStoreSliceName,
  input: PostListStoreLoadActionInput
): PostListStoreLoadActionOutput {
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
