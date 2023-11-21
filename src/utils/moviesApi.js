import { MOVIES_API_URL } from './constants';

const apiRequest = (endpoint, method, body) => {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers};
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${MOVIES_API_URL}${endpoint}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
  });
}

function getMoviesFromExternalApi() {
  return apiRequest('/beatfilm-movies', 'GET');
}

export { getMoviesFromExternalApi };
