import React from "react";
import "./css/UserAnm.css";
import { loadUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

function UserAnm(props) {
  console.log("UserAnm Render");
  const { currentUser, userLoading, loadUser } = props;
  console.log(userLoading);
  return (
    <div>
      {currentUser.name}
      {props.names[props.names.length - 1]}
      <br />
      <button
        className={`btn ${userLoading ? "startBtnAnm" : ""}`}
        onClick={() => loadUser()}
      >
        Loading
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    userLoading: state.user.userLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAnm);
