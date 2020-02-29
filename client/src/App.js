import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Ecomm from "./apps/ecomm/Ecomm";
import { BrowserRouter, Route } from "react-router-dom";
// import Securum from "./apps/securum/Securum";
import IndexPage from "./apps/securum/pages/IndexPage";
import SignInAndSignUpPage from "./apps/securum/pages/SignInAndSignUpPage";
import SendCoinsPage from "./apps/securum/pages/SendCoinsPage";
import ProfilePage from "./apps/securum/pages/ProfilePage";
// import Sample from './apps/sample/Sample';
// const appName = require('./select-app').appName

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="securum">
          <Route exact path="/" component={IndexPage} />
          <Route path="/sign-in-and-sign-up" component={SignInAndSignUpPage} />
          <Route path="/send-coins" component={SendCoinsPage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
