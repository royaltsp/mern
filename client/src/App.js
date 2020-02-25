import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Switch, Route } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import SignOut from './components/SignOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}
        <Route exact path='/' component={IndexPage} />
        <Route path='/sign-in-and-sign-up' component={SignInAndSignUpPage} />
        <Route path='/sign-out' component={SignOut} />
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
