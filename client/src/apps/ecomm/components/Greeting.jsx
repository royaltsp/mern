import React from 'react'
import { changeName, handleName, changeNameAutomatically } from '../../../actions/userActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Greeting(props) {
  // console.log("Greeting Render")
  setTimeout(() => {
    props.changeNameAutomatically("Saurabh")
  }, 2000);
  var names = new Array("Shubham", "Saurabh", "Pavan", "Rushi");
  return (
    <div>
      <span style={{
        lineHeight: "90px",
        fontWeight: "bold",
        fontFamily: "georgia",
        fontSize: "30px",
        color: "darkblue"
      }}>
        Hello {props.firstName}!
      </span>
      <button
        className="btn btn-primary"
        onClick={() => props.changeName("Saurabh")}
      >
        Change Name
      </button>
      <input
        type="text"
        id="firstName"
        value={props.firstName}
        onChange={(e) => props.handleName(e)}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // appName: state.appReducer.appName,
    firstName: state.userReducer.firstName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => { dispatch(changeName(name)) },
    handleName: e => { dispatch(handleName(e)) },
    changeNameAutomatically: function (name) {
      dispatch(changeNameAutomatically(name))
    }
  }
}

// export default withRouter(Header);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Greeting));