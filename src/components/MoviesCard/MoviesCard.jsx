import './MoviesCard.css';
import thumbnail from '../../images/movie_temp.jpg';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const MoviesCard = () => {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const toogleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="movies-card">
      <a href="">
        <img src={thumbnail} alt="Постер" className="movies-card__thumbnail link-hover" />
      </a>
      <div className="movies-card__text-group">
        <p className="movies-card__title">33 слова о дизайне</p>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
      {location.pathname === '/movies' ? (
        <button
          className={`movies-card__like-button button-hover ${
            isLiked ? 'movies-card__like-button_active' : ''
          }`}
          type="button"
          onClick={toogleLikeClick}
        />
      ) : (
        <button
          className="movies-card__delete-button button-hover"
          type="button"
        />
      )}
    </li>
  );
};

export default MoviesCard;
