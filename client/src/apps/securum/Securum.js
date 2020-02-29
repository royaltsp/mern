import React from "react";
// import logo from './logo.svg';
import "./Securum.css";

// import { Switch, Route } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
// import SignOut from './components/SignOut';
import SendCoinsPage from "./pages/SendCoinsPage";
import ProfilePage from "./pages/ProfilePage";

function Securum() {
  return (
    <div className="Securum">
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexPage} />
          <Route path='/sign-in-and-sign-up' component={SignInAndSignUpPage} />
          <Route path='/send-coins' component={SendCoinsPage} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default Securum;
