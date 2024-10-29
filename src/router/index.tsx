import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layouts from '../layouts/Layouts';
import Login from '../pages/login/Login';
import Letter from '../pages/letter/Letter';
import MyPage from '../pages/mypage/MyPage';
import KRedirect from '../pages/login/KRedirect';
import GRedirect from '../pages/login/GRedirect';
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
      {
        path: '/user/oauth2/code/kakao',
        element: <KRedirect />,
      },
      {
        path: '/user/oauth2/code/google',
        element: <GRedirect />,
      },
    ],
  },
]);
