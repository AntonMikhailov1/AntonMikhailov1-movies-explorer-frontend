import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './AuthHeader.css';

const AuthHeader = ({ greeting }) => {
  return (
    <section className="auth-header">
      <Link to="/">
        <img
          src={logo}
          alt="Логотип Movies Explorer"
          className="logo link-hover"
        />
      </Link>
      <h1 className="auth-header__greeting">{greeting}</h1>
    </section>
  );
};

export default AuthHeader;
