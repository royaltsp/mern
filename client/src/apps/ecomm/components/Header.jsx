import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../assets/crown.svg';
import './css/Header.scss';

// import { setCurrentUser } from "../../redux/actions/user.actions";

const Header = ({ currentUser }) => {
  // console.log(isSignedIn);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className='option' to='/shop-page'>Shop</Link>
        <Link className='option' to="/contact-page">Contact</Link>
        {
          currentUser ?
            <div className="option" style={{ "cursor": "pointer" }} onClick={() => { }}> SIGN OUT </div>
            :
            <Link className="option" to="/sign-in-and-sign-up-page"> Sign In </Link>
        }
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//   currentUser: state.userReducer.currentUser
// })

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
