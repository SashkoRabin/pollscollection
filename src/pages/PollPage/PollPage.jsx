import React from 'react';
import Header from '../../components/Header/Header';
import PollBody from './components/PollBody/PollBody';
import './PollPage.module.css';

const PollPage = () => {
  const id = window.location.search.replace('?', '');
  return (
    <div className="wrapper">
      <Header />
      <PollBody id={id} />
    </div>
  );
};

export default PollPage;
