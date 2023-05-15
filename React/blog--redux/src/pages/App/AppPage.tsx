import React, { memo, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavbarView } from '../../views';
import { useAppInstance } from '../../app';

export const AppPage: React.FC = memo(
function AppPage (): React.ReactElement | null {
  const { modules } = useAppInstance();

  const serviceOfPostListPage = modules.Pages.Post.List.getService();

  const postListPageUrl = useMemo(
    () => serviceOfPostListPage.createUrl(),
    [serviceOfPostListPage]
  );

  return (
    <>
      <AppNavbarView postListPageUrl={postListPageUrl}/>
      <Outlet/>
    </>
  );
});
