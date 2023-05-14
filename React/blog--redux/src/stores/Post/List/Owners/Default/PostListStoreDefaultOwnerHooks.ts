import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  type PostListStoreAddCompletedActionDispatch,
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
} from '../../../../../features';
import type { AppStoreRootState } from '../../../../App';
import { actionOfPostListAddCompleted } from './PostListStoreDefaultOwnerDefinition';

export interface PostListStoreDefaultOwnerHooks {
  readonly useStoreAddCompletedActionOutput: () => PostListStoreAddCompletedActionOutput;
  readonly useStoreState: () => PostListStoreState;
}

export function createPostListStoreDefaultOwnerHooks (): PostListStoreDefaultOwnerHooks {
  function useStoreAddCompletedActionOutput (): PostListStoreAddCompletedActionOutput {
    const dispatch = useDispatch();

    function run (payload: PostListStoreAddCompletedActionPayload) {
      if (!payload.id) {
        payload.id = nanoid();
      }
      dispatch(actionOfPostListAddCompleted(payload));
    }

    const dispatchOfAddCompletedAction: PostListStoreAddCompletedActionDispatch = {
      run
    };

    return {
      dispatchOfAddCompletedAction
    };
  }

  function useStoreState (): PostListStoreState {
    return useSelector((state: AppStoreRootState) => state.viewOfPostList)
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
