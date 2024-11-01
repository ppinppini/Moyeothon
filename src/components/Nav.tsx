import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const isMainActive = location.pathname === '/';
  const isMyPageActive = location.pathname === '/mypage';

  return (
    <div className="px-10 font-kaisei mobile:px-6">
      <nav className="flex space-x-4 font-bold">
        <Link
          to="/"
          className={`tablet:text-3xl desktop:text-3xl mobile:text-2xl ${isMainActive ? 'text-deep' : 'text-middle'}`}
        >
          <h1>Bucket List</h1>
        </Link>
        <Link
          to="/mypage"
          className={`tablet:text-3xl desktop:text-3xl mobile:text-2xl ${isMyPageActive ? 'text-deep' : 'text-middle'}`}
        >
          <h1>My Page</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
