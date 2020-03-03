import React from 'react';

import './css/SignInAndSignUpPage.scss';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInAndSignUpPage = (props) => {
  return (
    <div className='sign-in-and-sign-up' >
      <SignIn />
      <SignUp />
    </div >
  )
}

export default SignInAndSignUpPage;