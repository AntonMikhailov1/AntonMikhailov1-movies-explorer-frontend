import './Movies.css';

import { useState, useCallback, useEffect } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

import { handleMovieFiltering, handleMovieSearch } from '../../utils/utils';

import { RENDER_CONFIG } from '../../utils/config';

const Movies = ({
  savedMovies,
  onSearch,
  onMovieSave,
  onMovieDelete,
  isLoading,
}) => {
  const [initialMoviesList, setInitialMoviesList] = useState([]);
  const [moviesForRenderList, setMoviesForRenderList] = useState([]);
  const [foundMoviesList, setFoundMoviesList] = useState([]);
  const [isFilterOn, setFilter] = useState(false);
  const [isMoviesNotFound, setMoviesNotFound] = useState(false);
  const [renderParams, setRenderParams] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  const screenWidth = useScreenWidth();

  const handleSearchAndFiltering = useCallback(
    (movies, searchQuery) => {
      const foundMovies = handleMovieSearch(movies, searchQuery, false);
      setFoundMoviesList(foundMovies);
      if (!foundMovies.length) {
        setMoviesNotFound(true);
        setIsSearching(false);
        setMoviesForRenderList(foundMovies);
      } else {
        const filteredMovies = handleMovieFiltering(
          foundMovies,
          isFilterOn,
          false
        );
        setIsSearching(false);
        setMoviesForRenderList(filteredMovies);
        if (!filteredMovies.length) {
          setIsSearching(false);
          setMoviesNotFound(true);
        }
      }
    },
    [isFilterOn]
  );

  const handleSearchSubmit = useCallback(
    async (searchQuery) => {
      setMoviesNotFound(false);
      setIsSearching(true);
      if (!initialMoviesList.length) {
        const moviesData = await onSearch();
        if (moviesData) {
          setInitialMoviesList(moviesData);
          handleSearchAndFiltering(moviesData, searchQuery);
        }
      } else {
        handleSearchAndFiltering(initialMoviesList, searchQuery);
      }
    },
    [handleSearchAndFiltering, initialMoviesList, onSearch]
  );

  const handleFilterCheck = useCallback(
    (isChecked) => {
      setFilter(isChecked);
      setMoviesNotFound(false);
      const filteredMovies = handleMovieFiltering(
        foundMoviesList,
        isChecked,
        false
      );
      setMoviesForRenderList(filteredMovies);
      if (!filteredMovies.length) {
        setMoviesNotFound(true);
      }
    },
    [foundMoviesList]
  );

  useEffect(() => {
    if (screenWidth >= RENDER_CONFIG.base.width) {
      setRenderParams(RENDER_CONFIG.base.cards);
    } else if (
      screenWidth < RENDER_CONFIG.base.width &&
      screenWidth >= RENDER_CONFIG.desktop.width
    ) {
      setRenderParams(RENDER_CONFIG.desktop.cards);
    } else if (
      screenWidth < RENDER_CONFIG.desktop.width &&
      screenWidth >= RENDER_CONFIG.tablet.width
    ) {
      setRenderParams(RENDER_CONFIG.tablet.cards);
    } else {
      setRenderParams(RENDER_CONFIG.mobile.cards);
    }
  }, [screenWidth]);

  useEffect(() => {
    if (
      localStorage.getItem('foundMovies') &&
      localStorage.getItem('isMoviesFilterOn')
    ) {
      const filter = JSON.parse(localStorage.getItem('isMoviesFilterOn'));
      setFilter(filter);
      const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setFoundMoviesList(foundMovies);
      if (!foundMovies.length) {
        setMoviesNotFound(true);
        setMoviesForRenderList(foundMovies);
      } else {
        const filteredMovies = handleMovieFiltering(foundMovies, filter, false);
        setMoviesForRenderList(filteredMovies);
        if (!filteredMovies.length) {
          setMoviesNotFound(true);
        }
      }
    }
  }, []);

  return (
    <main className="movies">
      <SearchForm
        onSearch={handleSearchSubmit}
        onFilterChange={handleFilterCheck}
        isFilterOn={isFilterOn}
        isSearching={isSearching}
      />
      <MoviesCardList
        movies={moviesForRenderList}
        savedMovies={savedMovies}
        renderParams={renderParams}
        isMoviesNotFound={isMoviesNotFound}
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
        isLoading={isLoading}
      />
      <button type="button" className="movies__more-button button-hover">
        Ещё
      </button>
    </main>
  );
};

export default Movies;
