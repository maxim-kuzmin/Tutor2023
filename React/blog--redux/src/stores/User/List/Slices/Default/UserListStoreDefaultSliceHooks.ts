import { useSelector } from 'react-redux';
import {
  type UserListStoreState,
  type UserListStoreSliceHooks,
} from '../../../../../features';
import { type AppStoreRootState } from '../../../../App';

export function createUserListStoreDefaultSliceHooks (): UserListStoreSliceHooks {
  function useStoreState (): UserListStoreState {
    return useSelector((state: AppStoreRootState) => state.defaultUserList)
  }

  return {
    useStoreState,
  }
}
