import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = ({ name, email }) => {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет {name || 'Виталий!'}</h2>

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
            className="profile__input"
            defaultValue={name || 'Виталий!'}
            required="true"
            minLength={2}
            maxLength={40}
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail</label>
          <input
            type="text"
            name="email"
            className="profile__input"
            defaultValue={email || 'pochta@yandex.ru'}
            required="true"
            minLength={2}
            maxLength={40}
          />
        </fieldset>
      </form>
      <button type="button" className="profile__edit-button link-hover">
        Редактировать
      </button>
      <Link to="/sign-out" className="profile__exit-button link-hover">
        Выйти из аккаунта
      </Link>
    </section>
  );
};

export default Profile;
