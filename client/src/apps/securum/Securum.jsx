import React from 'react';
// import logo from './logo.svg';
import './Securum.css';
// import { Switch, Route } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
// import SignOut from './components/SignOut';
import SendCoinsPage from './pages/SendCoinsPage';

function Securum() {
  return (
    <div className="Securum">
      <BrowserRouter>
        <Switch>
          <Route exact path='/securum/' component={IndexPage} />
          <Route path='/securum/sign-in-and-sign-up' component={SignInAndSignUpPage} />
          <Route path='/securum/send-coins' component={SendCoinsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Securum;
