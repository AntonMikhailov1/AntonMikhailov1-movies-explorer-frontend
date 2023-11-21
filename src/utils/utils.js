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

function handleMovieFiltering(movies, isFilterChecked, isSavedMovies) {
  const shortMovieDuration = 40;
  if (!isSavedMovies) {
    localStorage.setItem('isMoviesFilterChecked', isFilterChecked);
  } else {
    localStorage.setItem('isSavedMoviesFilterChecked', isFilterChecked);
  }
  if (isFilterChecked) {
    const shortMovies = movies.filter(
      (movie) => movie.duration <= shortMovieDuration
    );
    return shortMovies;
  } else {
    return movies;
  }
}

function handleMovieSearch(movies, searchQuery, isSavedMovies) {
  const normalizeSearchQuery = searchQuery.toLowerCase().trim();
  const normalizeMovieNames = movies.filter((movie) => {
    const normalizeNameRu = movie.nameRU.toLowerCase().trim();
    const normalizeNameEn = movie.nameEN.toLowerCase().trim();
    return (
      normalizeNameRu.includes(normalizeSearchQuery) ||
      normalizeNameEn.includes(normalizeSearchQuery)
    );
  });
  if (!isSavedMovies) {
    localStorage.setItem('foundMovies', JSON.stringify(normalizeMovieNames));
    localStorage.setItem('moviesSearchQuery', normalizeSearchQuery);
  } else {
    localStorage.setItem('savedMoviesSearchQuery', normalizeSearchQuery);
  }
  return normalizeMovieNames;
}

function getSavedStatus(savedMovies, movieCard) {
  return savedMovies.find(
    (movie) => movie.movieId === (movieCard.id || movieCard.movieId)
  );
}

export {
  convertDuration,
  handleMovieFiltering,
  handleMovieSearch,
  getSavedStatus,
};
