import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className="bg-transparent flex justify-center h-20">
      <img src={logo} alt="로고이미지" className="block" />
    </header>
  );
};
export default Header;
