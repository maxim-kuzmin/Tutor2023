import {
  type UserItemStoreSliceName,
  type UserItemStoreSetActionOutput,
} from '../../../../../../features';
import { useStoreState } from '../../UserItemStoreStateHook';
import { useStoreSetActionDispatch } from './UserItemStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: UserItemStoreSliceName
): UserItemStoreSetActionOutput {
  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName);

  const { resultOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    resultOfSetAction,
  };
}
