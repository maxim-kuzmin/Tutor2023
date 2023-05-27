import { useContext } from 'react';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppInstanceContext, type AppStoreDispatch, type AppStoreRootState } from './AppDefinition';
import { type AppInstance } from './AppInstance';

export function useAppInstance (): AppInstance {
  return useContext(AppInstanceContext)!;
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppStoreDispatch = () => useDispatch<AppStoreDispatch>();
export const useAppStoreSelector: TypedUseSelectorHook<AppStoreRootState> = useSelector;
