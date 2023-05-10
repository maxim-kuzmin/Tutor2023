import { type ThunkAction, type Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import posts from '../stores/Post/List/Slice/PostListStoreSliceDefinition'

export const store = configureStore({
  reducer: {
    posts
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
