import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import MainPage from '../../pages/MainPage/MainPage';
import PollPage from '../../pages/PollPage/PollPage';

const SiteRouter = () => {
  const [authorized, setAuthorized] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage authorized={authorized} setAuthorized={setAuthorized} />
          }
        />
        <Route
          path="*"
          element={
            <MainPage authorized={authorized} setAuthorized={setAuthorized} />
          }
        />
        <Route
          path="auth"
          element={
            <AuthPage authorized={authorized} setAuthorized={setAuthorized} />
          }
        />
        <Route path="poll" element={<PollPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SiteRouter;
