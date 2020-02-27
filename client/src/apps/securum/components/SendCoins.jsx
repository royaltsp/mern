import React from 'react'
import { withRouter } from 'react-router-dom';
const axios = require('axios')
const jwt = require('jsonwebtoken')

class SendCoins extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      account: {},
      recipient: '',
      coins: '',
      msg: '',
      users: []
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.recipient === '' && this.state.coins === '')
      alert("Please Provide All Fields...");
    else {
      if (Number(this.state.account.balance) < Number(this.state.coins)) {
        alert("You Don't have enough coins")
      } else {
        this.setState({ msg: "Please Wait" })
        axios.post('/transaction/broadcast', {
          amount: Number(this.state.coins),
          sender: this.state.user.firstName + "$_$" + this.state.user._id,
          recipient: this.state.recipient
        }).then(res => {
          if (!res.data.error) {
            axios.post('/update-balance', {
              acc_id: this.state.account._id,
              balance: this.state.account.balance - this.state.coins
            }).then(res => {
              if (!res.data.error) {
                // console.log(res)
                alert("Transaction Created Successfully")
                this.setState({
                  coins: '',
                  recipient: '',
                  msg: "Transaction Done",
                  account: {
                    ...this.state.account,
                    balance: this.state.account.balance - this.state.coins
                  }
                })
                // console.log(this.state);
              } else
                alert("Transaction Failed!")
            }).catch(err => {
              console.error(err);
              throw err;
            })
          } else
            alert("Transaction Failed!")
        }).catch(err => { throw err })
      }
    }
  }

  handleChane = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })
  }

  componentDidMount() {
    let token = localStorage.getItem('mern')
    if (token) {
      jwt.verify(token, "mern", async (err, decoded) => {
        if (err) {
          console.log("err");
          console.error(err);
        } else {
          console.log("decoded");
          await this.setState({
            user: { ...decoded }
          })
          await fetch(`/account/${this.state.user._id}`)
            .then(res => res.json())
            .then(res => {
              this.setState({
                account: res.account
              })
            })
        }
      });
    }
    fetch('/users').then(res => res.json())
      .then(res => {
        this.setState({
          users: res.users
        })
      })
  }

  render() {
    const usersList = this.state.users.map((user, index) => {
      if (user._id !== this.state.user._id)
        return (<option key={index} value={user.firstName + "$_$" + user._id}>{user.firstName + ' ' + user.lastName}</option>)
    })
    if (localStorage.getItem('mern') === null) this.props.history.push('/');
    return (
      <div className="col-lg-5">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="form-group col-lg-12">
              <select
                id="recipient"
                className="check-form form-control"
                onChange={this.handleChane}
                value={this.state.recipient}
              >
                <option value="">Select User</option>
                {usersList}
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
                value={this.state.coins}
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