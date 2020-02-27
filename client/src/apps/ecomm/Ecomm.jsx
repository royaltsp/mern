import React from "react";
// import "./App.css";
import HomePage from "./pages/HomePage";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage";
import { connect } from "react-redux";

// const jwt = require('jsonwebtoken');

class App extends React.Component {

  signedIn() {
    this.setState({ isSignedIn: !this.state.isSignedIn })
  }

  setUser(user) {
    this.setState({ user: user })
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    //this.state.user.signOut();
  }

  render() {
    console.log("App Render");
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop-page' component={ShopPage} />
          <Route path='/sign-in-and-sign-up-page' component={SignInAndSignUpPage} />
        </BrowserRouter>
      </div>
    );
  }
}

// const tokenExist = () => {
//   return localStorage.getItem("userSigned")
// }
const mapStateToProps = (state) => {
  return {
    firstName: state.userReducer.firstName
  }
}

export default connect(mapStateToProps)(App);