import React from 'react';
// import mysql from 'mysql';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './css/SignUp.scss';
import { connect } from 'react-redux';

const axios = require('axios');

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bio: '',
      password: '',
      confirmPassword: '',
      wayToContact: ''
    };
  }


  handleSubmit = async event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {

      await this.createUserWithEmailAndPassword();

      this.setState({
        firstName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  }

  createUserWithEmailAndPassword() {
    axios.post('http://localhost:8000/add-user', this.state)
      .then(res => {
        console.log(res);
      }).catch(err => {
        throw err;
      })
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
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
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            label='Last Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.userReducer.firstName
  }
}

export default connect(mapStateToProps)(SignUp);