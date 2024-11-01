// import Search from './Search';
import Nav from '../../components/Nav';
import BucketComponent from './BucketComponent';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="w-full bg-light h-full p-4 flex items-center justify-center relative">
        <div className="w-full flex flex-col gap-4">
          {/* <Search /> */}
          <Nav />
          <BucketComponent /> {/* 서치 컴포넌트 내장 */}
          <div className="fixed bottom-4 right-4">
            <Button
              className="bg-white text-gray-800 rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:-translate-y-6 transition-transform duration-300 z-50"
              type="button"
              onClick={() => navigate('/AddBucket')}
            >
              <i className="fa-solid fa-pen-to-square text-deep text-3xl"></i>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
