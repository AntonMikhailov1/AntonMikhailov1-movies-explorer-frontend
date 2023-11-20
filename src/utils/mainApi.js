import { MAIN_API_URL } from './constants';
import { apiRequest } from './utils'

function signup({  name, email, password }) {
  return apiRequest(MAIN_API_URL, '/signup', 'POST', true, {
    name,
    email,
    password,
  });
}

function login({ email, password }) {
  return apiRequest(MAIN_API_URL, '/signin', 'POST', true, {
    email,
    password,
  });
}

function signout() {
  return apiRequest(MAIN_API_URL, '/signout', 'POST', true);
}

function getUser() {
  return apiRequest(MAIN_API_URL, '/users/me', 'GET', true);
}

function updateUserInfo({ name, email }) {
  return apiRequest(MAIN_API_URL, '/users/me', 'PATCH', true, {
    name,
    email,
  });
}

function getMovies() {
  return apiRequest(MAIN_API_URL, '/movies', 'GET', true);
}

function createMovie({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRu,
  nameEn,
}) {
  return apiRequest(MAIN_API_URL, '/movies', 'POST', true, {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRu,
    nameEn,
  });
}

function deleteMovie(id) {
  return apiRequest(MAIN_API_URL, `/movies/${id}`, 'DELETE', true);
}

export {
  signup,
  login,
  signout,
  getUser,
  updateUserInfo,
  getMovies,
  createMovie,
  deleteMovie
}
