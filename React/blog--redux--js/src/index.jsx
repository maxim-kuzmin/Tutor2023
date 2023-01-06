import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { worker } from './api/server';
import { AddPostForm } from './features/posts/AddPostForm';
import { PostsList } from './features/posts/PostsList';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: (
        <>
          <AddPostForm />
          <PostsList />
        </>
      ),
    },
    {
      path: 'posts/:postId',
      element: <SinglePostPage />,
    },
    {
      path: 'editPost/:postId',
      element: <EditPostForm />,
    },
  ],
},
]);

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' });

  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.StrictMode>,
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

start();
