import { type ThunkAction, type Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import defaultPostList from '../Post/List/Slices/Default/PostListStoreDefaultSliceDefinition'

export const store = configureStore({
  reducer: {
    defaultPostList
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
