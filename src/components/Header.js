import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () { 
  return (
    <header className="App-header">
      <nav className="m-nav">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/trending" activeClassName="active">Trending</NavLink>
      </nav>
      <h1 className="App-title">.Jiffy</h1>
    </header>
  );
}

export default Header;