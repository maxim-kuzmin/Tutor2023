import { StoreDispatchType } from '../../../../../../common';
import {
  type UserListStoreClearActionOutput,
  type UserListStoreSliceName,
} from '../../../../../../features';
import { useStoreClearActionDispatch } from './UserListStoreClearActionDispatchHook';

export function useStoreClearActionOutput (
  sliceName: UserListStoreSliceName
): UserListStoreClearActionOutput {
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
