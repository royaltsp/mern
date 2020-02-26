import React from 'react';

import './css/SignInAndSignUpPage.scss';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// 
const SignInAndSignUpPage = ({ user, signedIn }) => (
  <div className='sign-in-and-sign-up'>
    {/* <h1>Hello</h1> */}
    <SignIn user={user} signedIn={signedIn} />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;