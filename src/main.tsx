import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import { ReactQueryProvider } from './config/ReactQueryProvider.tsx';
import { ThemeProvider } from '@material-tailwind/react';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </ThemeProvider>
  </StrictMode>,
);
