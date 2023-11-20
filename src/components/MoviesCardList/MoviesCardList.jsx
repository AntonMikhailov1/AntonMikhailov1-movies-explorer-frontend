import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Preloader from "../Preloader/Preloader";

import { handleSavedStatus } from "../../utils/utils";

const MoviesCardList = ({ movies,
  savedMovies,
  renderParams,
  isMoviesNotFound,
  onMovieSave,
  onMovieDelete,
  isLoading }) => {

    const [moviesForRenderList, setMoviesForRenderList] = useState([]);
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/movies" && movies.length) {
        const result = movies.filter((movie, index) => {
          return index < renderParams.total;
        });
        setMoviesForRenderList(result);
      }
    }, [location.pathname, movies, renderParams]);

    useEffect(() => {
      if (location.pathname === "/saved-movies") {
        setMoviesForRenderList(movies);
      }
    }, [location.pathname, movies]);

    function handleMoreButtonClick() {
      const moviesLength = moviesForRenderList.length;
      const moviesLengthTotal = moviesLength + renderParams.more;
      const remainingMovies = movies.length - moviesLength;
      if (remainingMovies > 0) {
        const additionalMovies = movies.slice(moviesLength, moviesLengthTotal);
        setMoviesForRenderList([...moviesForRenderList, ...additionalMovies]);
      }
    }

  return (
    <>
      {!localStorage.getItem("searchQuery") && movies.length === 0 && null}
      {isLoading && movies.length === 0 && <Preloader />}
      {movies.length !== 0 && !isMoviesNotFound && (
        <>
          <ul
            className="movies-card-list"
          >
            {moviesForRenderList.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.id || movie._id}
                isSaved={handleSavedStatus(savedMovies, movie)}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
              />
            ))}
          </ul>
          {moviesForRenderList.length >= 5 &&
            moviesForRenderList.length < movies.length && (
              <button
                className="movies-card-list__more-button hover-button"
                type="button"
                onClick={handleMoreButtonClick}
              >
                Ещё
              </button>
            )}
        </>
      )}
    </>
  );
};

export default MoviesCardList;
