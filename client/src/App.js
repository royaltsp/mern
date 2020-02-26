import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Ecomm from './apps/ecomm/Ecomm';
import { BrowserRouter, Route } from 'react-router-dom';
import Securum from './apps/securum/Securum';
const appName = require('./select-app').appName

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Ecomm} />
        <Route path='/securum' component={Securum} />
      </BrowserRouter>
    </div>
  );
}

export default App;
