import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import './index.css';
import App from './App.tsx';
import Home from './Home.tsx';

const root = document.getElementById('root');

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, Component: Home },
    ],
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
