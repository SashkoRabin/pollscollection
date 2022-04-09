import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ authorized, setAuthorized }) => {
  const logout = async () => {
    await setAuthorized((prev) => !prev);
    localStorage.setItem('authorized', authorized);
  };
  return (
    <div className="header">
      <header>Polls collection - лучшие опросы и тесты</header>
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
  );
};

export default Header;
