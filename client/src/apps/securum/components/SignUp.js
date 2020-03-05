import React from "react";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
      password: "",
      password2: "",
      wayToContact: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.bio === "" ||
      this.state.password === "" ||
      this.state.wayToContact === ""
    )
      alert("All Fields Are Necessary...");
    else {
      if (this.state.password !== this.state.password2)
        alert("Password Didn't Matched");
      else {
        this.setState({
          msg: "Please Wait..."
        });
        axios
          .post("http://localhost:5001/add-user", { user: this.state })
          .then(res => {
            console.log(res);
            if (res.data.userAdded && res.data.accountAdded) {
              alert("Registration Successful...");
              this.setState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                bio: "",
                password: "",
                password2: "",
                wayToContact: "",
                msg: ""
              });
              this.props.history.push("/");
            } else {
              alert("Registration Failed. Try Again!");
            }
          })
          .catch(err => {
            throw err;
          });
      }
    }
  };

  handleChane = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleClick = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="col-lg-7">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="firstName"
                  onChange={this.handleChane}
                  value={this.state.firstName}
                  className="check-form"
                  type="text"
                  placeholder="First Name*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="lastName"
                  onChange={this.handleChane}
                  value={this.state.lastName}
                  className="check-form"
                  type="text"
                  placeholder="Last Name*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="email"
                  onChange={this.handleChane}
                  value={this.state.email}
                  className="check-form"
                  type="text"
                  placeholder="Email Adress*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="phone"
                  onChange={this.handleChane}
                  value={this.state.phone}
                  className="check-form"
                  type="text"
                  placeholder="Phone Number*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  id="bio"
                  onChange={this.handleChane}
                  placeholder="Tell us about yourself!"
                  value={this.state.bio}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="password"
                  onChange={this.handleChane}
                  value={this.state.password}
                  className="check-form"
                  type="password"
                  placeholder="Enter Password*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="password2"
                  onChange={this.handleChane}
                  value={this.state.password2}
                  className="check-form"
                  type="password"
                  placeholder="Confirm Password*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <h5 className="mb-3">
                Way to Contacts<span>*</span>:
              </h5>
              <div className="contact-type">
                <label className="ct-label">
                  &nbsp;&nbsp;Phone
                  <input
                    type="radio"
                    onClick={this.handleClick}
                    value="phone"
                    name="wayToContact"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="ct-label">
                  &nbsp;&nbsp;Email
                  <input
                    type="radio"
                    onClick={this.handleClick}
                    value="email"
                    name="wayToContact"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="ct-label">
                  &nbsp;&nbsp;Other
                  <input
                    type="radio"
                    onClick={this.handleClick}
                    value="other"
                    name="wayToContact"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              {this.state.msg}
              <br />
              <button
                onClick={this.handleSubmit}
                className="site-btn sb-gradients mt-4"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
