import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

const SearchForm = ({ onSearch, onFilterChange, isFilterOn, isSearching }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queryError, setQueryError] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/movies' &&
      localStorage.getItem('moviesSearchQuery')
    ) {
      const savedSearchQuery = localStorage.getItem('moviesSearchQuery');
      setSearchQuery(savedSearchQuery);
    } else if (
      location.pathname === '/saved-movies' &&
      localStorage.getItem('savedMoviesSearchQuery')
    ) {
      const savedSearchQuery = localStorage.getItem('savedMoviesSearchQuery');
      setSearchQuery(savedSearchQuery);
    }
  }, [location.pathname]);

  useEffect(() => {
    setQueryError('');
  }, [searchQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === '/movies') {
      searchQuery
        ? onSearch(searchQuery)
        : setQueryError('Нужно ввести ключевое слово');
    } else {
      onSearch(searchQuery);
    }
  }

  return (
    <section className="search">
      <div className="search__form-container">
        <form
          className="search__form"
          id="search-and-filter"
          action="#"
          name="search-and-filter"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="search__search-container">
            <div className="search__search-icon"></div>
            <input
              className="search__search-input input-focus"
              form="search-and-filter"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Фильм"
              disabled={isSearching ? true : false}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery || ''}
              required
            ></input>
            <button
              className="search__search-button button-hover"
              type="submit"
              form="search-and-filter"
            >
              Найти
            </button>
            <span className="search__search-error">{queryError}</span>
          </div>
          <FilterCheckbox
            onFilterChange={onFilterChange}
            isFilterOn={isFilterOn}
            isSearching={isSearching}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
