import React, { type PropsWithChildren, createContext, memo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { type ThunkAction, type Action, configureStore } from '@reduxjs/toolkit';
import { reducer } from '../stores/StoresDefinition';
import { type AppInstance, createAppInstance } from './AppInstance';

const instanceOfApp = createAppInstance();

const store = configureStore({
  reducer,
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

export const AppContext = createContext<AppInstance | null>(null);

export const AppContextProvider: React.FC<PropsWithChildren> = memo(
function ContextProvider ({
  children,
}: PropsWithChildren): React.ReactElement<PropsWithChildren> | null {
  return (
    <AppContext.Provider value={instanceOfApp}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </AppContext.Provider>
  )
});
