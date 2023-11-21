import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

import './Profile.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({ onUserUpdate, onSignOut }) => {
  const currentUser = useContext(CurrentUserContext);
  const [isCurrentUser, setCurrentUser] = useState(true);
  const [isEditing, setEditingStatus] = useState(false);
  const { values, errors, isFormValid, handleChange, resetValidation } =
    useFormValidation();

  useEffect(() => {
    currentUser.name !== values.name || currentUser.email !== values.email
      ? setCurrentUser(false)
      : setCurrentUser(true);
  }, [currentUser, values]);

  useEffect(() => {
    resetValidation(false, currentUser);
  }, [resetValidation, currentUser]);

  function handleEditClick() {
    setEditingStatus(!isEditing);
  }

  function handleDisable() {
    return isFormValid && !isCurrentUser ? false : true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUserUpdate(values);
    setEditingStatus(!isEditing);
  }

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет ${currentUser.name || ''}!`}</h1>
      <form
        name="profile"
        id="profile"
        className="profile__info"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="profile__fieldset">
          <label className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            id="name"
            form="profile"
            className={`profile__input input-focus input-placeholder ${
              errors.name ? 'profile__input_style_error' : ''
            }`}
            onChange={handleChange}
            value={values.name || ''}
            disabled={isEditing ? false : true}
            required
            minLength={2}
            maxLength={30}
            placeholder="Введите имя"
            pattern="^[A-Za-zА-Яа-яЁё\\-\\s]+$"
          />
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            form="profile"
            className={`profile__input input-focus input-placeholder ${
              errors.email ? 'profile__input_style_error' : ''
            }`}
            onChange={handleChange}
            value={values.email || ''}
            disabled={isEditing ? false : true}
            required
            placeholder="Введите Email"
            minLength={2}
            maxLength={30}
          />
        </fieldset>
      </form>
      <span className="profile__error-message">
        {errors.name || errors.email || ''}
      </span>
      <>
        {!isEditing ? (
          <div className="profile__link-container">
            <button
              type="button"
              className="profile__edit-button link-hover"
              onClick={handleEditClick}
            >
              Редактировать
            </button>
            <Link
              to="/"
              className="profile__exit-button link-hover"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        ) : (
          <button
            type="submit"
            form="profile"
            className="profile__submit-button button-hover"
            disabled={handleDisable()}
          >
            Сохранить
          </button>
        )}
      </>
    </main>
  );
};

export default Profile;
