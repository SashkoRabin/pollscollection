import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/" className="header">
      <header>Polls collection</header>
    </Link>
  );
};

export default Header;
