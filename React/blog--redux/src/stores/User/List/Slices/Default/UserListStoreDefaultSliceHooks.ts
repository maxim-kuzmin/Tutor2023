import { useCallback, useEffect, useRef } from 'react';
import { useAppStoreDispatch, useAppStoreSelector } from '../../../../../app';
import { OperationStatus } from '../../../../../common';
import {
  type UserListStoreLoadActionDispatch,
  type UserListStoreLoadActionOutput,
  type UserListStoreState,
  type UserListStoreSliceHooks,
} from '../../../../../features';
import { actionOfUserListLoad } from './UserListStoreDefaultSliceDefinition';

export function createUserListStoreDefaultSliceHooks (): UserListStoreSliceHooks {
  function useStoreLoadActionDispatch (): UserListStoreLoadActionDispatch {
    const dispatch = useAppStoreDispatch();

    const run = useCallback(
      async () => {
        await Promise.resolve(dispatch(actionOfUserListLoad()));
      },
      [dispatch]
    );

    useEffect(
      () => { run(); },
      [run]
    );

    const result: UserListStoreLoadActionDispatch = {
      run
    };

    return useRef(result).current;
  }

  function useStoreLoadActionOutput (): UserListStoreLoadActionOutput {
    const dispatchOfLoadAction = useStoreLoadActionDispatch();

    const { statusOfLoadAction } = useStoreState();

    return {
      dispatchOfLoadAction,
      pendingOfLoadAction: statusOfLoadAction === OperationStatus.Pending
    };
  }

  function useStoreState (): UserListStoreState {
    return useAppStoreSelector((state) => state.defaultUserList)
  }

  return {
    useStoreLoadActionOutput,
    useStoreState,
  }
}
