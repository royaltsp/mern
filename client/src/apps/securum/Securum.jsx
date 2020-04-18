import React from "react";
import { Provider } from "react-redux";
// import logo from './logo.svg';
import "./Securum.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

import store from "./redux/store";

import IndexPage from "./pages/IndexPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import SendCoinsPage from "./pages/SendCoinsPage";
import ProfilePage from "./pages/ProfilePage";

import { Switch, Route } from "react-router";

class Securum extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      (function blink() {
        $("#blink_text").fadeOut(500).fadeIn(500, blink);
      })();
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="Securum">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route
              path="/sign-in-and-sign-up"
              component={SignInAndSignUpPage}
            />
            <Route path="/send-coins" component={SendCoinsPage} />
            <Route path="/profile" component={ProfilePage} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default Securum;
