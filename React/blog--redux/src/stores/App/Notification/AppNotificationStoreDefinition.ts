import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type StoreStateMap, createStoreStateMap } from '../../../common';
import {
  type AppNotificationStoreSetActionPayload,
  AppNotificationStoreSliceName,
  type AppNotificationStoreState,
  createAppNotificationStoreState,
} from '../../../features';

const name = 'AppNotification';

type StateMap = StoreStateMap<AppNotificationStoreState>;
type SetAction = PayloadAction<AppNotificationStoreSetActionPayload>;

const initialState: StateMap = createStoreStateMap({
  functionToCreateState: () => createAppNotificationStoreState(),
  sliceNames: [AppNotificationStoreSliceName.Default],
});

function createClearActionReducer (sliceName: AppNotificationStoreSliceName) {
  return (stateMap: StateMap) => {
    const state = initialState[sliceName];

    stateMap[sliceName] = state;
  };
}

function createSetActionReducer (sliceName: AppNotificationStoreSliceName) {
  return (stateMap: StateMap, action: SetAction) => {
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
