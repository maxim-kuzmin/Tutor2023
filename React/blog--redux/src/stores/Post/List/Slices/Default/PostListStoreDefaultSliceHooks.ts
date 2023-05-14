import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  type PostListStoreAddCompletedActionDispatch,
  type PostListStoreAddCompletedActionPayload,
  type PostListStoreAddCompletedActionOutput,
  type PostListStoreState,
  type PostListStoreSliceHooks,
} from '../../../../../features';
import type { AppStoreRootState } from '../../../../App';
import { actionOfPostListAddCompleted } from './PostListStoreDefaultSliceDefinition';

export function createPostListStoreDefaultSliceHooks (): PostListStoreSliceHooks {
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
    return useSelector((state: AppStoreRootState) => state.sliceNameOfPostListStoreDefault)
  }

  return {
    useStoreAddCompletedActionOutput,
    useStoreState,
  }
}
