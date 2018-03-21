import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../containers/Main';
import Trending from '../containers/Trending';

function Layout (props) { 
  return (
    <div className="primary-layout">
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/trending" exact component={Trending} />
    </div>
  );
}

export default Layout;