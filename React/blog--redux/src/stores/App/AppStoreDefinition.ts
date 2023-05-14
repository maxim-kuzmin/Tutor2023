import { type ThunkAction, type Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import viewOfPostList from '../Post/List/Owners/Default/PostListStoreDefaultOwnerDefinition'

export const store = configureStore({
  reducer: {
    viewOfPostList
  }
});

export type AppStoreDispatch = typeof store.dispatch;
export type AppStoreRootState = ReturnType<typeof store.getState>;
export type AppStoreThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreRootState,
  unknown,
  Action<string>
>;
