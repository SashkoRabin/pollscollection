import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import PollPage from '../../pages/PollPage/PollPage';

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="poll" element={<PollPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SiteRouter;
