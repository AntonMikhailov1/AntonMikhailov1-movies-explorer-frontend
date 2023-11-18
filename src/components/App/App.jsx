import React, { useState, useCallback } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';

import './App.css';

import Main from '../Main/Main.jsx';
// import Header from '../Header/Header.jsx';
import Layout from '../Layout/Layout.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import NotFound from '../NotFound/NotFound.jsx';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
            <Route index element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} s />
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
