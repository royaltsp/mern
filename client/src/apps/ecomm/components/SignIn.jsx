import React from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './css/SignIn.scss';
import { connect } from 'react-redux';

import { signIn } from '../actions/userActions'
import { withRouter } from 'react-router';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      msg: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.props.signIn(this.state)) {
      this.setState({ msg: "Login Done" })
      setTimeout(() => {
        this.props.history.push('/')
      }, 2000)
    } else {
      this.setState({ msg: "Login Failed" })
    }
    console.log(this.props.user);
  };

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

          {
            this.state.msg ?
              <div>{this.state.msg}<br /></div>
              : null
          }

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

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: user => dispatch(signIn(user))
  }
}

export default connect(mapStateToProps
  , mapDispatchToProps)(withRouter(SignIn));