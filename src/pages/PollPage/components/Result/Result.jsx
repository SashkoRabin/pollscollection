import React from 'react';
import cl from './Result.module.css';
import { Link } from 'react-router-dom';

const Result = ({ text, res }) => {
  return (
    <div className={cl.wrapper}>
      <br />
      <br />
      <div className={cl.res_wrapper}>
        <div className={cl.result}>
          <h1 className={cl.wow}>Ого!!!</h1>
          <span>
            <i className="fa-solid fa-square-poll-vertical"></i>По нашим
            подсчётам...
          </span>

          <h2>
            {text}: {res}
          </h2>
          <br />
          <br />
          <Link to="*" className={cl.homeButton}>
            <i className="fa-solid fa-house"></i>На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
