import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavbarView } from '..';

export const AppRootView: React.FC = memo(
function AppRootView (): React.ReactElement | null {
  return (
    <>
      <AppNavbarView/>
      <Outlet/>
    </>
  );
});
