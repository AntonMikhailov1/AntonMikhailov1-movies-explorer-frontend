import { MOVIES_API_URL } from './constants';
import { apiRequest } from './utils';

function getMoviesFromExternalApi() {
  return apiRequest(MOVIES_API_URL, '/beatfilm-movies', 'GET');
}

export { getMoviesFromExternalApi };
