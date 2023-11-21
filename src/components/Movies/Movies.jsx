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
  const [isFilterChecked, setFilter] = useState(false);
  const [isMoviesNotFound, setMoviesNotFound] = useState(false);
  const [renderParams, setRenderParams] = useState({});
  const [isSearching, setIsSearching] = useState(false);

  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth >= RENDER_CONFIG.base.width) {
      setRenderParams(RENDER_CONFIG.base.cards);
    }
    if (
      screenWidth < RENDER_CONFIG.base.width &&
      screenWidth >= RENDER_CONFIG.tablet.width
    ) {
      setRenderParams(RENDER_CONFIG.tablet.cards);
    }
    setRenderParams(RENDER_CONFIG.mobile.cards);
  }, [screenWidth]);

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
          isFilterChecked,
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
    [isFilterChecked]
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
    if (
      localStorage.getItem('foundMovies') &&
      localStorage.getItem('isMoviesFilterChecked')
    ) {
      const filterStatus = JSON.parse(
        localStorage.getItem('isMoviesFilterChecked')
      );
      setFilter(filterStatus);
      const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setFoundMoviesList(foundMovies);
      if (!foundMovies.length) {
        setMoviesNotFound(true);
        setMoviesForRenderList(foundMovies);
      } else {
        const filteredMovies = handleMovieFiltering(
          foundMovies,
          filterStatus,
          false
        );
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
        isFilterChecked={isFilterChecked}
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
    </main>
  );
};

export default Movies;
