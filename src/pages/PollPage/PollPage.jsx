import React from 'react';
import PollBody from './components/PollBody/PollBody';

const PollPage = () => {
  const id = window.location.search.replace('?', '');
  return <PollBody id={id} />;
};

export default PollPage;
