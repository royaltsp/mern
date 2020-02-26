import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function PageInfo(props) {
  let pathname = "";
  switch (props.location.pathname) {
    case '/send-coins': pathname = "Send Coins"; break;
    case '/sign-in-and-sign-up': pathname = "Sign In / Sign Up"; break;
  }
  return (
    <div>
      <section className="page-info-section">
        <div className="container">
          <h2 style={{color: "white"}}>{pathname}</h2>
          <div className="site-beradcamb">
            <Link to="">Home</Link>
            <span>
              <i className="fa fa-angle-right"></i> 
              {pathname}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withRouter(PageInfo);