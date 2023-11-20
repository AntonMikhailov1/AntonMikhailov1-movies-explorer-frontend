function apiRequest(apiUrl, endpoint, method, credentials, body) {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method, headers };
  if (credentials) {
    config.credentials = 'include';
  }
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${apiUrl}${endpoint}`, config).then((res) => {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(`Ошибка: ${err.message}`));
  });
}

function convertDuration(duration) {
  const oneHour = 60;
  const minutes = duration % oneHour;
  const hours = (duration - minutes) / oneHour;
  if (hours < 1) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

function handleMovieFiltering(movies, isFilterOn, isSavedMovies) {
  const shortMovieDuration = 40;
  if (!isSavedMovies) {
    localStorage.setItem('isMoviesFilterOn', isFilterOn);
  } else {
    localStorage.setItem('isSavedMoviesFilterOn', isFilterOn);
  }
  if (isFilterOn) {
    const result = movies.filter((movie) => movie.duration <= shortMovieDuration);
    return result;
  } else {
    return movies;
  }
}

function handleMovieSearch(movies, searchQuery, isSavedMovies) {
  const normalizeSearchQuery = searchQuery.toLowerCase().trim();
  const result = movies.filter((movie) => {
    const normalizeNameRu = movie.nameRU.toLowerCase().trim();
    const normalizeNameEn = movie.nameEN.toLowerCase().trim();
    return (
      normalizeNameRu.includes(normalizeSearchQuery) ||
      normalizeNameEn.includes(normalizeSearchQuery)
    );
  });
  if (!isSavedMovies) {
    localStorage.setItem('foundMovies', JSON.stringify(result));
    localStorage.setItem('moviesSearchQuery', normalizeSearchQuery);
  } else {
    localStorage.setItem('savedMoviesSearchQuery', normalizeSearchQuery);
  }
  return result;
}

function handleSavedStatus(savedCards, movieCard) {
  return savedCards.find((card) => {
    return card.movieId === (movieCard.id || movieCard.movieId);
  });
}

export { apiRequest, convertDuration, handleMovieFiltering, handleMovieSearch, handleSavedStatus };
