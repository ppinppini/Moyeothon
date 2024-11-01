import Header from '../components/Header';
// import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layouts = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <main>
      {showHeader && <Header />}
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default Layouts;
