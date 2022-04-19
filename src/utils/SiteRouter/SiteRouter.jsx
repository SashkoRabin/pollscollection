import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import MainPage from '../../pages/MainPage/MainPage';
import PollPage from '../../pages/PollPage/PollPage';
import { AuthContext } from '../context/AuthContext';

const SiteRouter = () => {
  const [authorized, setAuthorized] = useState(false);
  const { loginSign, setLoginSign } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              loginSign={loginSign}
              authorized={authorized}
              setLoginSign={setLoginSign}
              setAuthorized={setAuthorized}
            />
          }
        />
        <Route
          path="*"
          element={
            <MainPage
              loginSign={loginSign}
              setLoginSign={setLoginSign}
              authorized={authorized}
              setAuthorized={setAuthorized}
            />
          }
        />
        <Route
          path="auth"
          element={
            <AuthPage
              setLoginSign={setLoginSign}
              authorized={authorized}
              setAuthorized={setAuthorized}
            />
          }
        />
        <Route path="poll" element={<PollPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SiteRouter;
