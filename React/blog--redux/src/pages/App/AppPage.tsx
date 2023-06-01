import React, { memo, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavbarView, AppNotificationView } from '../../views';
import { useAppInstance } from '../../app';
import { createUserDomainListGetOperationInput } from '../../domains';

export const AppPage: React.FC = memo(
function AppPage (): React.ReactElement | null {
  // const { modules } = useAppInstance();
  const { hooks, modules } = useAppInstance();

  const resultOfLoadAction = useMemo(
    () => createUserDomainListGetOperationInput(),
    []
  );

  hooks.Views.User.List.useStoreLoadActionOutput({
    resultOfLoadAction,
  });

  const serviceOfPostListPage = modules.Pages.Post.List.getService();

  const postListPageUrl = useMemo(
    () => serviceOfPostListPage.createUrl(),
    [serviceOfPostListPage]
  );

  return (
    <>
      <AppNotificationView/>
      <AppNavbarView postListPageUrl={postListPageUrl}/>
      <Outlet/>
    </>
  );
});
