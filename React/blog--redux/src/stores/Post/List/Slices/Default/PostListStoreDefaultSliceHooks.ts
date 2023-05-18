import { useAppStoreDispatch, useAppStoreSelector } from '../../../../../app';
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
    const dispatch = useAppStoreDispatch();

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
    const dispatch = useAppStoreDispatch();

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
    const dispatch = useAppStoreDispatch();

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
    return useAppStoreSelector((state) => state.defaultPostList)
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreAddReactionCompletedActionOutput,
    useStoreUpdateCompletedActionOutput,
    useStoreState,
  }
}
