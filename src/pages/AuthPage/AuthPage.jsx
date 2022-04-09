import React, { useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import cl from './AuthPage.module.css';
import { Link } from 'react-router-dom';

const AuthPage = ({ authorized, setAuthorized }) => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className={cl.wrapper}>
      <div className={cl.formCollection}>
        <Link to="*" className={cl.homeButton}>
          <i className="fa-solid fa-house"></i> На главную
        </Link>
        {authorized ? (
          <h2>Вы авторизировались!!!</h2>
        ) : hasAccount ? (
          <LogIn
            setHasAccount={setHasAccount}
            authorized={authorized}
            setAuthorized={setAuthorized}
          />
        ) : (
          <SignUp setHasAccount={setHasAccount} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
