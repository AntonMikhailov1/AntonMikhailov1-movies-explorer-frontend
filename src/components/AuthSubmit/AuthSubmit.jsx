import './AuthSubmit.css';
import { Link } from 'react-router-dom';

const AuthSubmit = ({ formName, sumbitButtonText, isFormValid }) => {
  const handleButtonDisable = isFormValid ? false : true;

  return (
    <div className="auth-submit">
      <button
        type="submit"
        form={formName}
        className="auth-submit__button button-hover"
        disabled={handleButtonDisable}
      >
        {sumbitButtonText}
      </button>
      {formName === 'register' ? (
        <p className="auth-submit__subtitle">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="auth-submit__link link-hover">
            Войти
          </Link>
        </p>
      ) : (
        <p className="auth-submit__subtitle">
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="auth-submit__link link-hover">
            Регистрация
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthSubmit;
