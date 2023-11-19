import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({ name, email }) => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет {name || 'Виталий!'}</h1>

      <form
        name="profile"
        action="submit"
        className="profile__info"
        method="post"
        noValidate=""
      >
        <fieldset className="profile__fieldset">
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            className="profile__input input-focus input-placeholder"
            defaultValue={name || 'Виталий!'}
            required="true"
            minLength={2}
            maxLength={40}
            placeholder="Введите имя"
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail</label>
          <input
            type="text"
            name="email"
            className="profile__input input-focus input-placeholder"
            defaultValue={email || 'pochta@yandex.ru'}
            required="true"
            minLength={2}
            maxLength={40}
            placeholder="Введите Email"
          />
        </fieldset>
      </form>
      <button type="button" className="profile__edit-button link-hover">
        Редактировать
      </button>
      <Link to="/sign-out" className="profile__exit-button link-hover">
        Выйти из аккаунта
      </Link>
    </main>
  );
};

export default Profile;
