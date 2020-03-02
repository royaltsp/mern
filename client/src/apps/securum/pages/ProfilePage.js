import React from "react";
// import PreLoader from '../components/PreLoader';
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// import DashBoard from '../components/DashBoard'
import Profile from "../components/Profile";
import PageInfo from "../components/PageInfo";
import { withRouter } from "react-router";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  // fetch("/blockchain")
  // .then(res => res.json())
  // .then(res=> {
  //   console.log(res);
  // })
  render() {
    if (localStorage.getItem("mern") === null) this.props.history.push("/");
    return (
      <div className="profile-page">
        {/* <PreLoader /> */}
        <Header />
        <PageInfo />
        <Profile />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProfilePage);
