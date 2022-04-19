import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setLoginSign, authorized, setAuthorized, loginSign }) => {
  const logout = async () => {
    await setAuthorized((prev) => !prev);
    setLoginSign('Не авторизировано');
  };
  return (
    <div className="header">
      <header>Polls collection - лучшие опросы и тесты</header>
      <div className="header_login">
        <p>{loginSign}</p>

        {!authorized ? (
          <Link to="auth" className="header_signin">
            Войти
          </Link>
        ) : (
          <button className="header_signin" onClick={logout}>
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
