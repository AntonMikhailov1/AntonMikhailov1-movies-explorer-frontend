import AuthHeader from '../AuthHeader/AuthHeader.jsx';
import AuthSubmit from '../AuthSubmit/AuthSubmit.jsx';
import './Register.css';
import '../../styles/form.css';

const Register = () => {
  return (
    <section className="register">
      <AuthHeader greeting="Добро Пожаловать!" />
      <form
        action="#"
        name="register"
        id="register"
        className="form form_type_register"
        noValidate
      >
        <label className="form__input-container">
          Имя
          <input
            className="form__input"
            type="text"
            name="name"
            form="register"
            required
            minLength="2"
            maxLength="30"
            id="name-input"
          />
          <span className="form__input-error"></span>
        </label>
        <label className="form__input-container">
          E-mail
          <input
            className="form__input form__input_style_error"
            type="text"
            name="email"
            form="register"
            required
            id="email-input"
          />
          <span className="form__input-error form__input-error_active">
            Что-то не так
          </span>
        </label>
        <label className="form__input-container">
          Пароль
          <input
            className="form__input"
            type="password"
            name="password"
            form="register"
            required
            minLength="6"
            maxLength="30"
            id="password-input"
          />
          <span className="form__input-error form__input-error_active"></span>
        </label>
      </form>
      <AuthSubmit formName="register" sumbitButtonText="Зарегистрироваться" />
    </section>
  );
};

export default Register;
