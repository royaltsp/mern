import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {

  signOut = () => {
    localStorage.removeItem('mern')
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <header className="header-section clearfix">
          <div className="container-fluid">
            <Link to="/" className="site-logo">
              <img src="img/logo.png" alt="" />
            </Link>
            <div className="responsive-bar"><i className="fa fa-bars"></i></div>

            <Link to="" className="user"><i className="fa fa-user"></i></Link>
            {
              localStorage.getItem('mern') === null ?
                <Link to="/sign-in-and-sign-up" className="site-btn">Sign In</Link>
                :
                <button className="site-btn" onClick={this.signOut}>Sign Out</button>
            }

            <nav className="main-menu">
              <ul className="menu-list">
                <li><Link to="">Solution</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="">Features</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="/send-coins">Send Coins</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(Header)