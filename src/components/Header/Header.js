import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="menu">
      <nav>
        <a href="/home">Home</a>
        <a href="/countries">Countris</a>
        <a href="/about">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
