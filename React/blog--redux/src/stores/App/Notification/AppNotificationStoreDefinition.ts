import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createStoreStateMap } from '../../../common';
import {
  AppNotificationStoreSliceName,
  type AppNotificationStoreSetActionPayload,
  type AppNotificationStoreStateMap,
  createAppNotificationStoreState,
} from '../../../features';

const name = 'AppNotification';

const initialState: AppNotificationStoreStateMap = createStoreStateMap({
  functionToCreateState: () => createAppNotificationStoreState(),
  sliceNames: [AppNotificationStoreSliceName.Default],
});

function createClearActionReducer (sliceName: AppNotificationStoreSliceName) {
  return (stateMap: AppNotificationStoreStateMap) => {
    const state = initialState[sliceName];

    stateMap[sliceName] = state;
  };
}

function createSetActionReducer (sliceName: AppNotificationStoreSliceName) {
  return (
    stateMap: AppNotificationStoreStateMap,
    action: PayloadAction<AppNotificationStoreSetActionPayload>
  ) => {
    const state = stateMap[sliceName];

    state.payloadOfSetAction = action.payload;
  };
}

const slice = createSlice({
  name,
  initialState,
  reducers: {
    defaultAppNotificationStoreClearAction: createClearActionReducer(AppNotificationStoreSliceName.Default),
    defaultAppNotificationStoreSetAction: createSetActionReducer(AppNotificationStoreSliceName.Default),
  },
});

export const {
  defaultAppNotificationStoreClearAction,
  defaultAppNotificationStoreSetAction,
} = slice.actions;

export default slice.reducer;
