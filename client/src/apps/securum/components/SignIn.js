import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { saveUser, changeEmail } from "../../../actions/userActions";
const axios = require("axios");

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      msg: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email === "" && this.state.password === "")
      alert("Please Provide All Details...");
    else {
      this.setState({ msg: "Please Wait" });
      axios
        .post("/check-user", {
          user: {
            email: this.state.email,
            password: this.state.password
          }
        })
        .then(res => {
          console.log('res', res)
          if (!res.data.msg) {
            saveUser(res.data.user);
            alert("Login Success");
            localStorage.setItem("mern", res.data.token);
            this.props.history.push("/profile");
          } else alert("Username OR Password Wrong!");
        })
        .catch(err => {
          throw err;
        });
    }
  };

  handleChane = e => {
    const { id, value } = e.target;
    // if (id === "email") changeEmail(value);
    this.setState({
      [id]: value
    });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="col-lg-5">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="form-group col-lg-12">
              <input
                id="email"
                className="check-form"
                type="email"
                placeholder="Username / Email*:"
                value={this.state.email}
                onChange={this.handleChane}
              />
              <span>
                <i className="ti-check"></i>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <input
                id="password"
                className="check-form"
                type="password"
                placeholder="Password*:"
                value={this.state.password}
                onChange={this.handleChane}
              />
              <span>
                <i className="ti-check"></i>
              </span>
            </div>
          </div>
          {this.state.msg}
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="form-group col-lg-4">
              <button
                onClick={this.handleSubmit}
                className="site-btn sb-gradients mt-4"
              >
                Sign In
              </button>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => {
      dispatch(saveUser(user));
    },
    changeEmail: email => {
      dispatch(changeEmail(email));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
