import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const isMainActive = location.pathname === '/';
  const isMyPageActive = location.pathname === '/mypage';

  return (
    <div className="px-10">
      <nav className="flex space-x-4 font-bold">
        <Link
          to="/"
          className={`mobile:text-3xl ${isMainActive ? 'text-deep' : 'text-middle'}`}
        >
          <h1>Bucket List</h1>
        </Link>
        <Link
          to="/mypage"
          className={`mobile:text-3xl ${isMyPageActive ? 'text-deep' : 'text-middle'}`}
        >
          <h1>My Page</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
