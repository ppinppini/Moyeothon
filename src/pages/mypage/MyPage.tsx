import Nav from '../../components/Nav';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import MyBucket from './MyBucket';

const MyPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <main className="w-full bg-light h-full p-4 flex items-center justify-center relative pt-28">
        <div className="w-full flex flex-col gap-4">
          <Nav />
          <Info />
          <MyBucket />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-inherit z-50 shadow-lg">
        <Button
          onClick={() => navigate('/letterlist')}
          className="bg-white text-black rounded-full transition-colors duration-300 hover:-translate-y-6 transition-transform duration-300 px-4"
        >
          <i className="fa-solid fa-inbox text-2xl text-deep"></i>
        </Button>

        <Button
          className="bg-white text-black rounded-full transition-colors duration-300 hover:bg-deep hover:text-white"
          type="button"
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </div>
    </>
  );
};

export default MyPage;
