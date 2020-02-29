import React from "react";
import { Link } from "react-router-dom";
import DashBoard from "./DashBoard";

export default function Profile() {
  return (
    <div>
      <section class="blog-page spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <DashBoard />
            </div>
            <div class="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
              <div class="widget-area">
                <h4 class="widget-title">Profile</h4>
                <p>Hello </p>
                <form class="widget-subscribe-from">
                  <input type="text" placeholder="Search Here..." />
                  <button class="site-btn sb-full-- sb-gradients">
                    Search
                  </button>
                </form>
              </div>
              <div class="widget-area">
                <div class="widget">
                  <h4 class="widget-title">Categories</h4>
                  <ul>
                    <li>
                      <Link to="#">DashBoard</Link>
                    </li>
                    <li>
                      <Link to="#">Buy/Sell</Link>
                    </li>
                    <li>
                      <Link to="#">Send/Request</Link>
                    </li>
                    <li>
                      <Link to="#">Accounts</Link>
                    </li>
                    <li>
                      <Link to="#">Tools</Link>
                    </li>
                    <li>
                      <Link to="#">Settings</Link>
                    </li>
                  </ul>
                </div>
                <div class="widget">
                  <h4 class="widget-title">Popular Posts</h4>
                  <ul class="popular-posts">
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="">
                          Lightning and Mainnet: A Look at the Protocol’s Hype,
                          Trials, and Error
                        </Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="">
                          This Week in Securum: Japan Gets Goxxed and Iota Gets
                          Into a Tangle
                        </Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="">
                          Securum Futures Report Shows Bullish Sentiment Is In
                          the Air
                        </Link>
                      </h5>
                    </li>
                    <li>
                      <span>22 dec 2018</span>
                      <h5>
                        <Link to="">
                          Why Venezuela’s New National Cryptocurrency El Petro
                          Will Fail
                        </Link>
                      </h5>
                    </li>
                  </ul>
                </div>
                <div class="widget">
                  <h4 class="widget-title">Recent Tweets</h4>
                  <ul class="twitter-widget">
                    <li>
                      <h5>Why Does The Securum Price Move So Much?</h5>
                      <Link to="https://t.co/MSQVkamNwa">
                        https://t.co/MSQVkamNwa
                      </Link>
                      <span>4 days ago</span>
                    </li>
                    <li>
                      <h5>How Can I Trade Securum without an Exchange?</h5>
                      <Link to="https://t.co/MSQVkamNwa">
                        https://t.co/MSQVkamNwa
                      </Link>
                      <span>4 days ago</span>
                    </li>
                  </ul>
                </div>
                <div class="widget">
                  <h4 class="widget-title">Follow Us</h4>
                  <div class="social">
                    <Link to="" class="facebook">
                      <i class="fa fa-facebook"></i>
                    </Link>
                    <Link to="" class="google">
                      <i class="fa fa-google-plus"></i>
                    </Link>
                    <Link to="" class="instagram">
                      <i class="fa fa-instagram"></i>
                    </Link>
                    <Link to="" class="twitter">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
