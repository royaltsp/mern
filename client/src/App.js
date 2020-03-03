import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import EcommRoutes from "./apps/ecomm/routes/EcommRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <EcommRoutes />
      </Router>
    </div>
  );
}

export default App;
