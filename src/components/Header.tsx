import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // 루트 주소로 이동
  };

  return (
    <header className="bg-transparent flex justify-center h-20">
      <img
        src={logo}
        alt="로고이미지"
        className="block cursor-pointer"
        onClick={handleLogoClick}
      />
    </header>
  );
};

export default Header;
