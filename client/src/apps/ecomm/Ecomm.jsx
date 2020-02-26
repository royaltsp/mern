import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';

import './Ecomm.css';

function Ecomm() {
  return (
    <div className="Ecomm">
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop-page' component={ShopPage} />
        <Route path='/sign-in-and-sign-up-page' component={SignInAndSignUpPage} />
      </BrowserRouter>
    </div>
  );
}

export default Ecomm;
