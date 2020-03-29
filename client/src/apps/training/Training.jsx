import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, connect } from "react-redux";
import trainingStore from "./redux/store";
import UserAnm from "./components/UserAnm";

export default function TrainingWrapper() {
  return (
    <Provider store={trainingStore}>
      <Training />
    </Provider>
  );
}

class Training extends Component {
  state = {
    names: ["shubham"]
  };
  render() {
    return (
      <div>
        <UserAnm names={this.state.names} />
        <button>Change Name</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

connect(mapStateToProps)(Training);
