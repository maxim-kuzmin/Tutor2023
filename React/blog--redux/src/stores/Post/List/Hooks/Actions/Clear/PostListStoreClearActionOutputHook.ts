import { StoreDispatchType } from '../../../../../../common';
import {
  type PostListStoreClearActionOutput,
  type PostListStoreSliceName,
} from '../../../../../../features';
import { useStoreClearActionDispatch } from './PostListStoreClearActionDispatchHook';

export function useStoreClearActionOutput (
  sliceName: PostListStoreSliceName
): PostListStoreClearActionOutput {
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
