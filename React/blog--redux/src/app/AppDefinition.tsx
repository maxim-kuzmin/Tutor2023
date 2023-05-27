import React, { createContext, memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { type ApiOperationResponse } from '../data';
import { reducer } from '../stores/StoresDefinition';
import { type AppInstance, createAppInstance } from './AppInstance';
import { createAppRouter } from './AppRouter';
import { createAppSetup } from './AppSetup';

const instanceOfApp = createAppInstance();

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: instanceOfApp
      },
      serializableCheck: false
    })
});

export type AppStoreDispatch = typeof store.dispatch;
export type AppStoreRootState = ReturnType<typeof store.getState>;

export interface AppStoreThunkApiConfig {
  state: AppStoreRootState;
  dispatch: AppStoreDispatch;
  rejectValue: ApiOperationResponse;
  extra: AppInstance;
}

export const AppInstanceContext = createContext<AppInstance | null>(null);

export const AppRoot: React.FC = memo(
function AppRoot (): React.ReactElement | null {
  return (
    <React.StrictMode>
      <AppInstanceContext.Provider value={instanceOfApp}>
        <ReduxProvider store={store}>
          <RouterProvider router={createAppRouter()} />
        </ReduxProvider>
      </AppInstanceContext.Provider>
    </React.StrictMode>
  )
});

export const setupOfApp = createAppSetup({ instanceOfApp });
