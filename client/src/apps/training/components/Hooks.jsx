import React, { useState } from "react";

function Hooks() {
  console.log("Hook Rendered...")
  const [name, setName] = useState("Shubham");
  const [age, setAge] = useState(22);
  const [address, setAddress] = useState("Nandur");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mx-auto col-lg-3">
            {name}
            <br/>
            <button
              className="btn btn-primary"
              onClick={() => setName("Saurabh")}
            >
              Change Name
            </button>
          </div>
          <div className="col-12 text-center mx-auto col-lg-3">
            {age}
            <br/>
            <button
              className="btn btn-success"
              onClick={() => setAge(23)}
            >
              Change Age
            </button>
          </div>

          <div className="col-12 text-center mx-auto col-lg-3">
            {address}
            <br/>
            <button
              className="btn btn-warning"
              onClick={() => setAddress("Pune")}
            >
              Change Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hooks;
