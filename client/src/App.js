import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Ecomm from "./apps/ecomm/Ecomm";
import { BrowserRouter, Route } from "react-router-dom";
import EcommRoutes from "./apps/ecomm/routes/EcommRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EcommRoutes />
        <Route exact path="/" component={Ecomm} />
      </BrowserRouter>
    </div>
  );
}

export default App;
