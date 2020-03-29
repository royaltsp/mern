import React from "react";
import Card from "../components/Card";

function Container() {
  return (
    <div className="container">
      <div className="">
        Hello
      </div>
      <div className="row">
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
        <div className="col-lg-4 col-12 col-md-6">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Container;
