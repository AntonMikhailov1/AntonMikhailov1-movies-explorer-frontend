import { useState, useCallback, useEffect } from "react";

import './SavedMovies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

import { handleMovieFiltering, handleMovieSearch } from "../../utils/utils";

const SavedMovies = ({ savedMovies, onCardDelete }) => {
  const [moviesForRenderList, setMoviesForRenderList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isFilterOn, setFilter] = useState(false);
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
            isFilterOn,
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
    [savedMovies, isFilterOn]
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
      localStorage.getItem("savedMoviesSearchQuery") &&
      localStorage.getItem("isSavedMoviesFilterOn")
    ) {
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const searchQuery = localStorage.getItem("savedMoviesSearchQuery");
      const found = handleMovieSearch(savedMovies, searchQuery, true);
      setFilteredMoviesList(found);
      if (!found.length) {
        setMoviesNotFound(true);
        setMoviesForRenderList(found);
      } else {
        const filtered = handleMovieFiltering(found, filter, true);
        setMoviesForRenderList(filtered);
        if (!filtered.length) {
          setMoviesNotFound(true);
        }
      }
    } else if (
      !localStorage.getItem("savedMoviesSearchQuery") &&
      localStorage.getItem("isSavedMoviesFilterOn")
    ) {
      setFilteredMoviesList(savedMovies);
      const filter = JSON.parse(localStorage.getItem("isSavedMoviesFilterOn"));
      setFilter(filter);
      const filtered = handleMovieFiltering(savedMovies, filter, true);
      setMoviesForRenderList(filtered);
      if (!filtered.length) {
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
              isFilterOn={isFilterOn}
              isSearching={isSearching}/>
      <MoviesCardList 
              movies={moviesForRenderList}
              savedMovies={savedMovies}
              isMoviesNotFound={isMoviesNotFound}
              onCardDelete={onCardDelete}/>
    </main>
  );
};

export default SavedMovies;