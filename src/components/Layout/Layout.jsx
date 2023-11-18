import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      {location.pathname !== '/profile' && <Footer />}
    </>
  );
};

export default Layout;
