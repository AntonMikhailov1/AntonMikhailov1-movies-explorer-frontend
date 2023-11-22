import { useState, useCallback, useEffect } from 'react';

import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

import { handleMovieFiltering, handleMovieSearch } from '../../utils/utils';

const SavedMovies = ({ savedMovies, onMovieDelete }) => {
  const [moviesForRenderList, setMoviesForRenderList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isFilterChecked, setFilter] = useState(false);
  const [isMoviesNotFound, setMoviesNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchSubmit = useCallback(
    (searchQuery) => {
      setMoviesNotFound(false);
      setIsSearching(true);
      if (savedMovies.length) {
        const foundMovies = handleMovieSearch(savedMovies, searchQuery, true);
        setFilteredMoviesList(foundMovies);
        if (!foundMovies.length) {
          setMoviesNotFound(true);
          setIsSearching(false);
          setMoviesForRenderList(foundMovies);
        } else {
          const filteredMovies = handleMovieFiltering(
            foundMovies,
            isFilterChecked,
            true
          );
          setIsSearching(false);
          setMoviesForRenderList(filteredMovies);
          if (!filteredMovies.length) {
            setIsSearching(false);
            setMoviesNotFound(true);
          }
        }
      } else {
        setIsSearching(false);
        setMoviesNotFound(true);
      }
    },
    [savedMovies, isFilterChecked]
  );

  const handleFilterCheck = useCallback(
    (isChecked) => {
      setFilter(isChecked);
      setMoviesNotFound(false);
      const filteredMovies = handleMovieFiltering(
        filteredMoviesList,
        isChecked,
        false
      );
      setMoviesForRenderList(filteredMovies);
      if (!filteredMovies.length) {
        setMoviesNotFound(true);
      }
    },
    [filteredMoviesList]
  );

  useEffect(() => {
    setMoviesNotFound(false);
    if (
      localStorage.getItem('savedMoviesSearchQuery') &&
      localStorage.getItem('isSavedMoviesFilterChecked')
    ) {
      const filterStatus = JSON.parse(
        localStorage.getItem('isSavedMoviesFilterChecked')
      );
      setFilter(filterStatus);
      const searchQuery = localStorage.getItem('savedMoviesSearchQuery');
      const foundMovies = handleMovieSearch(savedMovies, searchQuery, true);
      setFilteredMoviesList(foundMovies);
      if (!foundMovies.length) {
        setMoviesNotFound(true);
        setMoviesForRenderList(foundMovies);
      } else {
        const filteredMovies = handleMovieFiltering(
          foundMovies,
          filterStatus,
          true
        );
        setMoviesForRenderList(filteredMovies);
        if (!filteredMovies.length) {
          setMoviesNotFound(true);
        }
      }
    } else if (
      !localStorage.getItem("savedMoviesSearchQuery") &&
      localStorage.getItem("isSavedMoviesFilterChecked")
    ) {
      setFilteredMoviesList(savedMovies);
      const filterStatus = JSON.parse(localStorage.getItem("isSavedMoviesFilterChecked"));
      setFilter(filterStatus);
      const filteredMovies = handleMovieFiltering(savedMovies, filterStatus, true);
      setMoviesForRenderList(filteredMovies);
      if (!filteredMovies.length) {
        setMoviesNotFound(true);
      }
    } else {
      setMoviesForRenderList(savedMovies);
      setFilteredMoviesList(savedMovies);
    }
  }, [savedMovies]);

  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={handleSearchSubmit}
        onFilterChange={handleFilterCheck}
        isFilterChecked={isFilterChecked}
        isSearching={isSearching}
      />
      <MoviesCardList
        movies={moviesForRenderList}
        savedMovies={savedMovies}
        isMoviesNotFound={isMoviesNotFound}
        onMovieDelete={onMovieDelete}
      />
    </main>
  );
};

export default SavedMovies;
