import { useDispatch, useSelector } from 'react-redux';
import {
  type PostListStoreAddCompletedActionDispatch,
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  type PostListStoreSliceHooks,
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreUpdateCompletedActionDispatch,
} from '../../../../../features';
import type { AppStoreRootState } from '../../../../App';
import { actionOfPostListAddCompleted } from './PostListStoreDefaultSliceDefinition';

export function createPostListStoreDefaultSliceHooks (): PostListStoreSliceHooks {
  function useStoreAddCompletedActionOutput (): PostListStoreAddCompletedActionOutput {
    const dispatch = useDispatch();

    function run (payload: PostListStoreAddCompletedActionPayload) {
      dispatch(actionOfPostListAddCompleted(payload));
    }

    const dispatchOfAddCompletedAction: PostListStoreAddCompletedActionDispatch = {
      run
    };

    return {
      dispatchOfAddCompletedAction
    };
  }

  function useStoreUpdateCompletedActionOutput (): PostListStoreUpdateCompletedActionOutput {
    const dispatch = useDispatch();

    function run (payload: PostListStoreAddCompletedActionPayload) {
      dispatch(actionOfPostListAddCompleted(payload));
    }

    const dispatchOfUpdateCompletedAction: PostListStoreUpdateCompletedActionDispatch = {
      run
    };

    return {
      dispatchOfUpdateCompletedAction
    };
  }

  function useStoreState (): PostListStoreState {
    return useSelector((state: AppStoreRootState) => state.defaultPostList)
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreUpdateCompletedActionOutput,
    useStoreState,
  }
}
