import {
  type PostItemStoreSliceName,
  type PostItemStoreSetActionOutput,
} from '../../../../../../features';
import { useStoreState } from '../../PostItemStoreStateHook';
import { useStoreSetActionDispatch } from './PostItemStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: PostItemStoreSliceName
): PostItemStoreSetActionOutput {
  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName);

  const { resultOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    resultOfSetAction,
  };
}
