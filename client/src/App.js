import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Ecomm from './apps/ecomm/Ecomm';
import { BrowserRouter, Route } from 'react-router-dom';
import Securum from './apps/securum/Securum';
import Sample from './apps/sample/Sample';
const appName = require('./select-app').appName

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path='/' component={Sample} /> */}
        {/* <Route exact path='/' component={Securum} /> */}
        <Route path='/' component={Securum} />
      </BrowserRouter>
    </div>
  );
}

export default App;
