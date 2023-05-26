import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createStoreStateMap } from '../../../common';
import {
  AppNotificationStoreSliceName,
  type AppNotificationStoreClearActionPayload,
  type AppNotificationStoreSetActionPayload,
  type AppNotificationStoreStateMap,
  createAppNotificationStoreState,
} from '../../../features';

const name = 'AppNotification';

const initialState: AppNotificationStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createAppNotificationStoreState(),
  sliceNames: [AppNotificationStoreSliceName.Default],
});

const slice = createSlice({
  name,
  initialState,
  reducers: {
    createAppNotificationStoreClearAction: (
      stateMap: AppNotificationStoreStateMap,
      action: PayloadAction<AppNotificationStoreClearActionPayload>
    ) => {
      const { payload: { sliceName } } = action;

      const state = initialState[sliceName];

      stateMap[sliceName] = state;
    },
    createAppNotificationStoreSetAction: (
      stateMap: AppNotificationStoreStateMap,
      action: PayloadAction<AppNotificationStoreSetActionPayload>
    ) => {
      const { payload: { sliceName }, payload } = action;

      const state = stateMap[sliceName];

      state.resultOfSetAction = payload.actionResult;
    },
  },
});

export const {
  createAppNotificationStoreClearAction,
  createAppNotificationStoreSetAction,
} = slice.actions;

export default slice.reducer;
