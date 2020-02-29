import React from "react";
// import PreLoader from '../components/PreLoader';
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// import DashBoard from '../components/DashBoard'
import { connect } from "react-redux";
import Profile from "../components/Profile";
import PageInfo from "../components/PageInfo";
import { withRouter } from "react-router";

function ProfilePage(props) {
  // fetch("/blockchain")
  // .then(res => res.json())
  // .then(res=> {
  //   console.log(res);
  // })
  if (localStorage.getItem("mern") === null) props.history.push("/");
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

export default withRouter(ProfilePage);
