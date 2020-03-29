import React from "react";

function Card() {
  return (
    <div className="card text-center">
      <div className="card-img-top">
        <img src="/img/member/1.jpg" alt="hi" />
      </div>
      <div className="card-body">
        <h1 className="card-title">Shubham</h1>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quos rem in doloremque minus.
        </p>
        <button className="btn btn-danger active">View Profile</button>
      </div>
    </div>
  );
}

export default Card;
