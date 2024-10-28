import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layouts from '../layouts/Layouts';
import Login from '../pages/login/Login';
import Letter from '../pages/letter/Letter';
import MyPage from '../pages/mypage/MyPage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/letter',
        element: <Letter />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);
