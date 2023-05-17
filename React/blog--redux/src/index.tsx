import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './app';
import { PostItemViewMode } from './views';
import { AppPage, PostItemPage, PostListPage } from './pages';
import reportWebVitals from './reportWebVitals';

import './index.css';

const router = createBrowserRouter([{
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
  ]
}]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
