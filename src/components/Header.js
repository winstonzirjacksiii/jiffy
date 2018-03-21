import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () { 
  return (
    <header className="App-header">
      <nav className="m-nav">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/trending" activeClassName="active">Trending</NavLink>
      </nav>
      <h1 className="App-title">Welcome to Jiffy</h1>
      <h3>definitely not just a Giphy API tech demo...</h3>
    </header>
  );
}

export default Header;