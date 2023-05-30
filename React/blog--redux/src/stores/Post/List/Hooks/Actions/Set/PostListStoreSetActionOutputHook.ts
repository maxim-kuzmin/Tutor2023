import {
  type PostListStoreSliceName,
  type PostListStoreSetActionOutput,
} from '../../../../../../features';
import { useStoreState } from '../../PostListStoreStateHook';
import { useStoreSetActionDispatch } from './PostListStoreSetActionDispatchHook';

export function useStoreSetActionOutput (
  sliceName: PostListStoreSliceName
): PostListStoreSetActionOutput {
  const dispatchOfSetAction = useStoreSetActionDispatch(sliceName);

  const { resultOfSetAction } = useStoreState(sliceName);

  return {
    dispatchOfSetAction,
    resultOfSetAction,
  };
}
