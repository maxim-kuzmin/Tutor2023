import {
  type UserListStoreSliceName,
  type UserListStoreSetActionOutput,
} from '../../../../../../features';
import { useStoreState } from '../../UserListStoreStateHook';
import { useStoreSetActionDispatch } from './UserListStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: UserListStoreSliceName
): UserListStoreSetActionOutput {
  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName);

  const { resultOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    resultOfSetAction,
  };
}
