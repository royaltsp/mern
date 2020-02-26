import React, { Component } from "react";
import "./css/HomePage.scss";
import Directory from "../components/Directory";
export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
