import React, { Component } from "react";

import "./Bootstrap.css";
import Card from "./components/Card";
import Container from "./containers/container";
import ContainerFluid from "./containers/container-fluid";
import Button from "./components/Button";

export default class Bootstrap extends Component {
  render() {
    return (
      <div className="bootstrap">
        <Button>Hello</Button>
        <br />
        <button className="btn btn-primary">Hello</button>
        {/* <Container />
        <ContainerFluid /> */}
      </div>
    );
  }
}
