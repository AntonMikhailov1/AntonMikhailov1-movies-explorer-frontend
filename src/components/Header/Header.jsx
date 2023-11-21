import './Header.css';

import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === '/' ? 'header_type_landing' : ''
      }`}
    >
      <div className="header__container">
        <Link to="/">
          <img
            className="logo link-hover"
            src={logo}
            alt="Логотип Movies Explorer"
          />
        </Link>
        {!isLoggedIn ? (
          <div className="header__link-container">
            <Link to="/signup" className="header__signup-link link-hover">
              Регистрация
            </Link>

            <Link to="/signin" className="header__signin-link link-hover">
              Войти
            </Link>
          </div>
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
};

export default Header;
