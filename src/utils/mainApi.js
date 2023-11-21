import { MAIN_API_URL } from './constants';

const apiRequest = (endpoint, method, body) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = { method, headers, credentials: 'include' };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${MAIN_API_URL}${endpoint}`, config).then((res) => {
    return res.ok
      ? res.json()
      : res.json().then((err) => {
          return Promise.reject(
            `Ошибка ${res.status}: ${err.message || err.error}`
          );
        });
  });
};

function signup({ name, email, password }) {
  return apiRequest('/signup', 'POST', {
    name,
    email,
    password,
  });
}

function login({ email, password }) {
  return apiRequest('/signin', 'POST', {
    email,
    password,
  });
}

function signout() {
  return apiRequest('/signout', 'POST');
}

function getUser() {
  return apiRequest('/users/me', 'GET');
}

function updateUserInfo({ name, email }) {
  return apiRequest('/users/me', 'PATCH', {
    name,
    email,
  });
}

function getSavedMovies() {
  return apiRequest('/movies', 'GET');
}

function saveMovie({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
}) {
  return apiRequest('/movies', 'POST', {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  });
}

function deleteMovie(id) {
  return apiRequest(`/movies/${id}`, 'DELETE');
}

export {
  signup,
  login,
  signout,
  getUser,
  updateUserInfo,
  getSavedMovies,
  saveMovie,
  deleteMovie,
};
