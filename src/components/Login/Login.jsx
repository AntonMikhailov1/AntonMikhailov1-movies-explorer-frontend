import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation.js';

import './Login.css';
import '../../styles/form.css';

import AuthHeader from '../AuthHeader/AuthHeader.jsx';
import AuthSubmit from '../AuthSubmit/AuthSubmit.jsx';

const Login = ({ onLogin, onLoading, isLoggedIn }) => {
  const { values, errors, isFormValid, handleChange, resetValidation } =
    useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="login">
      <AuthHeader greeting="Рады Видеть!" />
      <form
        name="login"
        id="login"
        className="form form_type_login"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="form__input-container">
          E-mail
          <input
            className={`form__input input-focus input-placeholder ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="text"
            name="email"
            form="login"
            required
            id="email"
            disabled={onLoading ? true : false}
            onChange={handleChange}
            value={values.email || ''}
            placeholder="Введите Email"
          />
          <span
            className={`form__input-error ${
              errors.email ? 'form__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className="form__input-container">
          Пароль
          <input
            className={`form__input input-focus input-placeholder ${
              errors.password ? 'form__input_style_error' : ''
            }`}
            type="password"
            name="password"
            id="password"
            form="login"
            required
            minLength="4"
            maxLength="30"
            disabled={onLoading ? true : false}
            onChange={handleChange}
            value={values.password || ''}
            placeholder="Введите пароль"
          />
          <span
            className={`form__input-error ${
              errors.password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
      </form>
      <AuthSubmit
        formName="login"
        sumbitButtonText="Войти"
        isFormValid={isFormValid}
      />
    </main>
  );
};

export default Login;
