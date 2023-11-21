import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

import { convertDuration } from "../../utils/utils";

import { MOVIES_API_URL } from "../../utils/constants";

const MoviesCard = ({ movie, isSaved, onMovieSave, onMovieDelete }) => {
  const location = useLocation();

  function handleSaveClick() {
    onMovieSave(movie);
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={
            location.pathname === '/movies'
              ? `${MOVIES_API_URL}${movie.image.url}`
              : `${movie.image}`
          }
          alt={`Постер фильма ${movie.nameRU}`}
          className="movies-card__thumbnail link-hover"
        />
      </a>
      <div className="movies-card__text-group">
        <p className="movies-card__title">{movie.nameRU}</p>
        <p className="movies-card__duration">
          {convertDuration(movie.duration)}
        </p>
      </div>
      {location.pathname === '/movies' ? (
        <button
          className={`movies-card__like-button button-hover ${
            isSaved ? 'movies-card__like-button_active' : ''
          }`}
          type="button"
          onClick={handleSaveClick}
        />
      ) : (
        <button
          className="movies-card__delete-button button-hover"
          type="button"
          onClick={handleDeleteClick}
        />
      )}
    </li>
  );
};

export default MoviesCard;
