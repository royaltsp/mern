import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../assets/crown.svg';
import './css/Header.scss';
import { signOut } from '../functions/sign-out';
import { removeUser } from '../redux/actions/userActions';

const Header = (props) => {
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
          props.currentUser ?
            <div className="option" onClick={() => { signOut(props) }}> SIGN OUT </div>
            :
            <Link className="option" to="/sign-in-and-sign-up-page"> Sign In </Link>
        }
      </div>
    </div >
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));