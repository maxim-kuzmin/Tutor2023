import React, { memo } from 'react';
import { PostItemEditView, PostListView } from '../..';
import { AppNavbarView } from '..';

export const AppRootView: React.FC = memo(
function AppRootView (): React.ReactElement | null {
  return (
    <>
      <AppNavbarView/>
      <PostItemEditView/>
      <PostListView/>
    </>
  );
});
