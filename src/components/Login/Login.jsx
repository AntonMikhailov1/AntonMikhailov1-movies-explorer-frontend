import AuthHeader from '../AuthHeader/AuthHeader.jsx';
import AuthSubmit from '../AuthSubmit/AuthSubmit.jsx';
import './Login.css';
import '../../styles/form.css';

const Login = () => {
  return (
    <section className="login">
      <AuthHeader greeting="Рады Видеть!" />
      <form
        action="#"
        name="login"
        id="login"
        className="form form_type_login"
        noValidate
      >
        <label className="form__input-container">
          E-mail
          <input
            className="form__input form__input_style_error"
            type="text"
            name="email"
            form="login"
            required
            id="email-input"
            value=""
          />
          <span className="form__input-error">Что-то не так</span>
        </label>
        <label className="form__input-container">
          Пароль
          <input
            className="form__input"
            type="password"
            name="password"
            form="login"
            required
            minLength="6"
            maxLength="30"
            id="password-input"
            value=""
          />
          <span className="form__input-error form__input-error_active"></span>
        </label>
      </form>
      <AuthSubmit formName="login" sumbitButtonText="Войти" />
    </section>
  );
};

export default Login;
