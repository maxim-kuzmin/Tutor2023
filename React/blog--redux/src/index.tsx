import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot, setupOfApp } from './app';
import reportWebVitals from './reportWebVitals';

import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

(async () => {
  await setupOfApp.run();

  root.render(<AppRoot/>);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
