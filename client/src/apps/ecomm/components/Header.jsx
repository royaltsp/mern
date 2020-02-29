import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../assets/crown.svg';
import './css/Header.scss';
import Greeting from './Greeting';

const Header = (props) => {
  console.log("Header Render");
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
        {/* <span>{props.appName}</span> */}
      </Link>
      <Greeting />
      <div className="options">
        <Link className='option' to='/shop-page'>Shop</Link>
        <Link className='option' to="/contact-page">Contact</Link>
        <Link className='option' to="/about-page">About</Link>
        {
          props.currentUser ?
            <div className="option" style={{ "cursor": "pointer" }} onClick={() => { }}> SIGN OUT </div>
            :
            <Link className="option" to="/sign-in-and-sign-up-page"> Sign In </Link>
        }
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    // appName: state.appReducer.appName,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     changeName: name => { dispatch(changeName(name)) }
//   }
// }

// export default withRouter(Header);
export default connect(mapStateToProps)(withRouter(Header));