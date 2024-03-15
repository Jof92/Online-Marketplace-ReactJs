import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

function Header () {
  return (
    <header className="header">
      <div className="container">
        <img src="https://cdn.jsdelivr.net/gh/Jof92/Jof923@main/fs4.png" alt="Logo FastSell" />
        <SearchBar/>
        <CartButton/>

      </div>
    </header>
  );
}

export default Header;
