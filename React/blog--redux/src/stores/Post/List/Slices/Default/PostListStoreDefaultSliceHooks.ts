import { useDispatch, useSelector } from 'react-redux';
import { type AppStoreRootState } from '../../../../../app';
import {
  type PostListStoreAddCompletedActionDispatch,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreAddReactionCompletedActionDispatch,
  type PostListStoreAddReactionCompletedActionOutput,
  type PostListStoreAddReactionCompletedActionPayload,
  type PostListStoreUpdateCompletedActionDispatch,
  type PostListStoreUpdateCompletedActionOutput,
  type PostListStoreUpdateCompletedActionPayload,
  type PostListStoreState,
  type PostListStoreSliceHooks,
} from '../../../../../features';
import {
  actionOfPostListAddCompleted,
  actionOfPostListAddReactionCompleted,
  actionOfPostListUpdateCompleted,
} from './PostListStoreDefaultSliceDefinition';

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

  function useStoreAddReactionCompletedActionOutput (): PostListStoreAddReactionCompletedActionOutput {
    const dispatch = useDispatch();

    function run (payload: PostListStoreAddReactionCompletedActionPayload) {
      dispatch(actionOfPostListAddReactionCompleted(payload));
    }

    const dispatchOfAddReactionCompletedAction: PostListStoreAddReactionCompletedActionDispatch = {
      run
    };

    return {
      dispatchOfAddReactionCompletedAction
    };
  }

  function useStoreUpdateCompletedActionOutput (): PostListStoreUpdateCompletedActionOutput {
    const dispatch = useDispatch();

    function run (payload: PostListStoreUpdateCompletedActionPayload) {
      dispatch(actionOfPostListUpdateCompleted(payload));
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
    useStoreAddReactionCompletedActionOutput,
    useStoreUpdateCompletedActionOutput,
    useStoreState,
  }
}
