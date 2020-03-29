import React from "react";

import HomePage from "./pages/HomePage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import { Switch, Route } from "react-router";

import "./Ecomm.scss";

import { Provider } from "react-redux";
import ecommStore from "./redux/store";

function Ecomm() {
  return (
    <Provider store={ecommStore}>
      <div className="ecomm">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/sign-in-and-sign-up-page"
            component={SignInAndSignUpPage}
          />
          <Route path="/shop-page" component={ShopPage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default Ecomm;
