import React from 'react';
import cl from './Polls.module.css';
import { Link } from 'react-router-dom';

const PollItem = ({ poll }) => {
  const pollLink = 'poll?' + poll.id;
  return (
    <Link to={pollLink} className={cl.card}>
      <div className={cl.icon}>
        <i className={poll.icon}></i>
      </div>
      <h4>{poll.title}</h4>
      <p>{poll.description}</p>
    </Link>
  );
};

export default PollItem;
