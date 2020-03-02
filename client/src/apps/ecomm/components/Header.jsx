import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../assets/crown.svg';
import './css/Header.scss';
import { signOut } from '../functions/sign-out';

const Header = (props) => {
  console.log(props.user);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className='option' to='/shop-page'>Shop</Link>
        <Link className='option' to="/contact-page">Contact</Link>
        <Link className='option' to="/about-page">About</Link>
        {
          localStorage.getItem('ecommToken') ?
            <div className="option" onClick={() => { signOut() }}> SIGN OUT </div>
            :
            <Link className="option" to="/sign-in-and-sign-up-page"> Sign In </Link>
        }
      </div>
    </div >
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

export default connect(mapStateToProps)(withRouter(Header));