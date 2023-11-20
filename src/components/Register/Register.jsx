import { Navigate } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation.js';

import './Register.css';
import '../../styles/form.css';

import AuthHeader from '../AuthHeader/AuthHeader.jsx';
import AuthSubmit from '../AuthSubmit/AuthSubmit.jsx';


const Register = ({ onRegister, onLoading, isLoggedIn }) => {
  const { values, errors, isFormValid, onChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return isLoggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="register">
      <AuthHeader greeting="Добро Пожаловать!" />
      <form
        name="register"
        id="register"
        className="form form_type_register"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="form__input-container">
          Имя
          <input
            className={`form__input input-focus input-placeholder ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="text"
            name="name"
            id="name"
            form="register"
            required
            minLength="2"
            maxLength="30"
            disabled={onLoading ? true : false}
            onChange={onChange}
            value={values.email || ''}
            placeholder="Введите имя"
          />
          <span
            className={`form__input-error ${
              errors.name ? 'form__input-error_active' : ''
            }`}
          >
            {errors.name || ''}
          </span>
        </label>
        <label className="form__input-container">
          E-mail
          <input
            className={`form__input input-focus input-placeholder ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="text"
            name="email"
            id="email"
            form="register"
            required
            disabled={onLoading ? true : false}
            onChange={onChange}
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
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="password"
            name="password"
            id="password"
            form="register"
            required
            minLength="6"
            maxLength="30"
            disabled={onLoading ? true : false}
            onChange={onChange}
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
      <AuthSubmit formName="register" sumbitButtonText="Зарегистрироваться" />
    </main>
  );
};

export default Register;
