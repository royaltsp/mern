import React from "react";
import { connect } from "react-redux";
function Sample(props) {
  return <div>{props.users[0].name}</div>;
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Sample);
