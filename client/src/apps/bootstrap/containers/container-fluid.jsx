import React from "react";
import Card from "../components/Card";

function ContainerFluid() {
  return (
    <div className="container-fluid">
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

export default ContainerFluid;
