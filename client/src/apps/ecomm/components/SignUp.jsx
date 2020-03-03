import React from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './css/SignUp.scss';

import { signUp } from '../functions/sign-up'

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      msg: ''
    };
  }


  handleSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state;

    if (!(firstName && lastName && email && password && password2))
      this.setState({ msg: "All Fields Are Necessary" })
    else {
      if (password !== password2)
        this.setState({ msg: "Password Dosen't Matched" })
      else {
        if (signUp({ firstName, lastName, email, password })) {
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            msg: "Registration Successful"
          });
        } else
          this.setState({ msg: "Registration Failed" })
      }
    }
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  componentDidMount() {
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            id='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            id='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            label='Last Name'
            required
          />
          <FormInput
            type='email'
            id='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            id='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            id='password2'
            value={this.state.password2}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          {
            this.state.msg !== '' ?
              <span>{this.state.msg}<br /><br /></span>
              : null
          }
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}


export default SignUp;