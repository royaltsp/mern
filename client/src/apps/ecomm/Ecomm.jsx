import React from "react";

import HomePage from './pages/HomePage'
import Header from "../ecomm/components/Header";
import { connect } from "react-redux";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserByToken()
  }

  render() {
    console.log("App Render");
    return (
      <div className="Ecomm">
        <HomePage />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserByToken: () => getUserByToken()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);