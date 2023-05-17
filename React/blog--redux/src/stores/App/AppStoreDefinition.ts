import { type ThunkAction, type Action, configureStore } from '@reduxjs/toolkit';
import { instanceOfApp } from '../../app/AppDefinition';
import defaultPostList from '../Post/List/Slices/Default/PostListStoreDefaultSliceDefinition'
import defaultUserList from '../User/List/Slices/Default/UserListStoreDefaultSliceDefinition'

export const store = configureStore({
  reducer: {
    defaultPostList,
    defaultUserList
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { instanceOfApp }
      }
    })
});

export type AppStoreDispatch = typeof store.dispatch;
export type AppStoreRootState = ReturnType<typeof store.getState>;
export type AppStoreThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreRootState,
  unknown,
  Action<string>
>;
