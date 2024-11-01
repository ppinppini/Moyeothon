import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layouts from '../layouts/Layouts';
import Login from '../pages/login/Login';
import Letter from '../pages/letter/Letter';
import LetterList from '../pages/letter/LetterList';
import MyPage from '../pages/mypage/MyPage';
import KRedirect from '../pages/login/KRedirect';
import GRedirect from '../pages/login/GRedirect';
import AddBucket from '../pages/home/AddBucket';
// import Loading from '../components/Loading';
import EditBucket from '../pages/home/EditBucket';

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
        path: '/addBucket',
        element: <AddBucket />,
      },

      {
        path: '/editBucket/:id',
        element: <EditBucket />,
      },

      {
        path: '/letter',
        element: <Letter />,
      },
      {
        path: '/letterList',
        element: <LetterList />,
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
  {
    path: '/login',
    element: <Login />,
  },
]);
