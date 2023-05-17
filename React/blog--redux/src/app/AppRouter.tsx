import React from 'react';
import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import { AppPage, PostItemPage, PostListPage } from '../pages';
import { PostItemViewMode } from '../views';

const routes: RouteObject[] = [{
  path: '/',
  element: <AppPage />,
  children: [
    {
      path: '',
      element: <PostListPage/>
    },
    {
      path: 'post/:postId',
      element: <PostItemPage mode={PostItemViewMode.Display}/>
    },
    {
      path: 'post/:postId/edit',
      element: <PostItemPage mode={PostItemViewMode.Edit}/>
    }
  ],
}];

export function createAppRouter () {
  return createBrowserRouter(routes);
}
