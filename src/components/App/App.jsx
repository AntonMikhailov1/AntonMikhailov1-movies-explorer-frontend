import { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

import './App.css';

import * as mainApi from '../../utils/mainApi';
import * as moviesApi from '../../utils/moviesApi';

import { MOVIES_API_URL } from '../../utils/constants';

import Main from '../Main/Main.jsx';
import Layout from '../Layout/Layout.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Preloader from '../Preloader/Preloader.jsx';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderStatus] = useState(true);

  const navigate = useNavigate();

  const handleGetUser = useCallback(async () => {
    try {
      const userData = await mainApi.getUser();
      if (userData) {
        setLoggedIn(true);
        setCurrentUser(userData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPreloaderStatus(false);
    }
  }, []);

  const handleGetSavedMovies = useCallback(async () => {
    try {
      const moviesData = await mainApi.getSavedMovies();
      if (moviesData) {
        setSavedMovies(moviesData);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    handleGetUser();
  }, [isLoggedIn, handleGetUser]);

  useEffect(() => {
    if (isLoggedIn) {
      handleGetSavedMovies();
    }
  }, [isLoggedIn, handleGetSavedMovies]);

  async function handleUserUpdate({ name, email }) {
    setLoading(true);
    try {
      const userData = await mainApi.updateUserInfo({ name, email });
      if (userData) {
        setCurrentUser(userData);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserSignUp({ name, email, password }) {
    setLoading(true);
    try {
      const userData = await mainApi.signup({ name, email, password });
      if (userData) {
        handleUserLogin({ email, password });
        navigate('/', { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserLogin({ email, password }) {
    setLoading(true);
    try {
      const userData = await mainApi.login({ email, password });
      if (userData) {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUserSignOut() {
    try {
      const data = await mainApi.signout();
      if (data) {
        setLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        localStorage.clear();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGetAllMovies() {
    setLoading(true);
    try {
      const moviesData = await moviesApi.getMoviesFromExternalApi();
      if (moviesData) {
        return moviesData;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveMovie(movie) {
    try {
      const movieData = await mainApi.saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
      if (movieData) {
        setSavedMovies([movieData, ...savedMovies]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );

    try {
      const data = await mainApi.deleteMovie(savedMovie._id);
      if (data) {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== savedMovie._id)
        );
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="app">
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
              <Route index element={<Main />} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    savedMovies={savedMovies}
                    onSearch={handleGetAllMovies}
                    onMovieSave={handleSaveMovie}
                    onMovieDelete={handleDeleteMovie}
                    isLoading={isLoading}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    savedMovies={savedMovies}
                    onMovieDelete={handleDeleteMovie}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onUserUpdate={handleUserUpdate}
                    onSignOut={handleUserSignOut}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
            </Route>
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={handleUserLogin}
                  onLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleUserSignUp}
                  onLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
};

export default App;
