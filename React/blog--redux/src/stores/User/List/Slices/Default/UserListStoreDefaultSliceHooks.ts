import { useSelector } from 'react-redux';
import { type AppStoreRootState } from '../../../../../app';
import {
  type UserListStoreState,
  type UserListStoreSliceHooks,
} from '../../../../../features';

export function createUserListStoreDefaultSliceHooks (): UserListStoreSliceHooks {
  function useStoreState (): UserListStoreState {
    return useSelector((state: AppStoreRootState) => state.defaultUserList)
  }

  return {
    useStoreState,
  }
}
