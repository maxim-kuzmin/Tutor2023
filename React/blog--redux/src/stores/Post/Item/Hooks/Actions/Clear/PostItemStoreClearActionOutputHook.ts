import { StoreDispatchType } from '../../../../../../common';
import {
  type PostItemStoreClearActionOutput,
  type PostItemStoreSliceName,
} from '../../../../../../features';
import { useStoreClearActionDispatch } from './PostItemStoreClearActionDispatchHook';

export function useStoreClearActionOutput (
  sliceName: PostItemStoreSliceName
): PostItemStoreClearActionOutput {
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
