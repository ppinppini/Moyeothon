import { createRoot } from 'react-dom/client';
import './index.css'; //전체 배경색 적용되어 있음!!
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import { ReactQueryProvider } from './config/ReactQueryProvider.tsx';
import { ThemeProvider } from '@material-tailwind/react';
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </ThemeProvider>,
);
