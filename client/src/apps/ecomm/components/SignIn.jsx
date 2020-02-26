import React from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './css/SignIn.scss';
const axios = require('axios');
// const jwt = require("jsonwebtoken");

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.checkUserPresentInDatabase();
  };

  checkUserPresentInDatabase(){
    axios.post('http://localhost:8000/check-user', this.state)
    .then(res=> {
      if (res.data === true) {
        alert("User Present In Database")
      }else{
        alert("Wrong Email OR Password")
      }
    }).catch(err=> {
      throw err;
    })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;