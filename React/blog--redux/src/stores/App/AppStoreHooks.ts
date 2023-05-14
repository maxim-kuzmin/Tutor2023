import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type AppStoreRootState, type AppStoreDispatch } from '.';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppStoreDispatch = () => useDispatch<AppStoreDispatch>();
export const useAppStoreSelector: TypedUseSelectorHook<AppStoreRootState> = useSelector;
