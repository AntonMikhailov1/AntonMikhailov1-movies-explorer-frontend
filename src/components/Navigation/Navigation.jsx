import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const toogleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navigation ${isMenuOpen ? 'navigation_menu-opened' : ''}`}
      >
        <button
          type="button"
          className={`navigation__close-button button-hover ${
            isMenuOpen ? 'navigation__close-button_menu-opened' : ''
          }`}
          onClick={closeMenu}
        ></button>
        <div className="navigation__movies-container">
          {isMenuOpen ? (
            <Link to="/" className={`navigation__main-link link-hover ${location.pathname === '/' ? 'navigation__link-active' : ''}`}>
              Главная
            </Link>
          ) : null}
          <Link to="/movies" className={`navigation__movies-link link-hover ${location.pathname === '/movies' ? 'navigation__link-active' : ''}`}>
            Фильмы
          </Link>
          <Link to="/saved-movies" className={`navigation__saved-movies-link link-hover ${location.pathname === '/saved-movies' ? 'navigation__link-active' : ''}`}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="navigation__profile-link link-hover">
          Аккаунт <div className={`navigation__profile-icon link-hover ${location.pathname === '/' ? 'navigation__profile-icon_landing' : ''}`} ></div>
        </Link>
      </nav>
      <button
        type="button"
        className="navigation__menu-button button-hover"
        onClick={toogleMenu}
      ></button>
    </>
  );
};

export default Navigation;
