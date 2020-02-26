import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component{
  // constructor(){
  //   super()
  // }

  signOut = () => {
    localStorage.removeItem('mern')
    this.props.history.push('/securum')
  }

  render(){
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
                <Link to="/securum/sign-in-and-sign-up" className="site-btn">Sign In</Link>
                :
                <button className="site-btn" onClick={this.signOut}>Sign Out</button>
            }

            <nav className="main-menu">
              <ul className="menu-list">
                <li><Link to="">Solution</Link></li>
                <li><Link to="">Features</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="/securum/send-coins">Send Coins</Link></li>
                {/* <li><Link to="/securum/blog">Blog</Link></li> */}
                <li><Link to="/securum/about">About</Link></li>
                <li><Link to="/securum/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(Header)