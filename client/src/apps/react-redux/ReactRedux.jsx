import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeUser } from "./redux/actions/userActions";

function ReactRedux(props) {
  const { changeUser, users } = props;
  const [name, setName] = useState(users[0].name);
  useEffect(() => {
    setName(users[0].name);
  }, []);
  console.log("Render");
  return (
    <div className="react-redux">
      <h1>{name}</h1>
      <button onClick={() => changeUser({ name: "Saurabh" })}>
        Change User
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => dispatch(changeUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
