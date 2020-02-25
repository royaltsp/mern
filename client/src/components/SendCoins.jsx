import React from 'react'
import { withRouter } from 'react-router-dom';
const axios = require('axios')

class SendCoins extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      msg: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email === '' && this.state.password === '')
      alert("Please Provide All Details...");
    else {
      this.setState({msg: "Please Wait"})
      axios.post('/check-user', { user: this.state })
        .then(res => {
          if(!res.data.error){
            alert("Login Success")
            localStorage.setItem('mern', res.data.token)
            this.props.history.push('/')
          }
          else
            alert("Username OR Password Wrong!")
        }).catch(err => { throw err })
    }
  }

  handleChane = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })
    // console.log(this.state);
  }

  render() {
    return (
      <div className="col-lg-5">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="form-group col-lg-12">
              <select
                id="selectUser"
                className="check-form form-control"
                onChange={this.handleChane}
              >
                <option value="-1">Select User</option>
                <option value="hashByUid">hash by uid</option>
              </select>
              <span><i className="ti-check"></i></span>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <input
                id="coins"
                className="check-form"
                type="text"
                placeholder="Coins*:"
                value={this.state.password}
                onChange={this.handleChane}
              />
              <span><i className="ti-check"></i></span>
            </div>
          </div>
          {this.state.msg}
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="form-group col-lg-4">
              <button onClick={this.handleSubmit} className="site-btn sb-gradients mt-4">
                Send Coins
            </button>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SendCoins);