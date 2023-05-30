import { StoreDispatchType } from '../../../../../../common';
import {
  type UserItemStoreClearActionOutput,
  type UserItemStoreSliceName,
} from '../../../../../../features';
import { useStoreClearActionDispatch } from './UserItemStoreClearActionDispatchHook';

export function useStoreClearActionOutput (
  sliceName: UserItemStoreSliceName
): UserItemStoreClearActionOutput {
  const dispatchOfClearAction = useStoreClearActionDispatch(
    sliceName,
    {
      dispatchType: StoreDispatchType.Unmount
    }
  );

  return {
    dispatchOfClearAction
  };
}
