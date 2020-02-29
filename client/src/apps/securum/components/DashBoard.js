import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <div class="row">
        {/* <!-- blog item --> */}
        <div class="col-md-12">
          <div class="blog-item bi-feature">
            <figure class="blog-thumb">
              <img src="img/blog/2.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 jan 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  This Week in Securum: Up, Down and Sideways
                </Link>{" "}
                >
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
              <p>
                Securum is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money with anyone else, anywhere on the planet,
                conveniently and without restriction. It’s the dawn of a better,
                more free world
              </p>
              <Link to="" class="readmore">
                Readmore <i class="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/1.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 dec 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  Blockchain Rolls Out Trading Feature for 22 States in the U.S
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/3.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">28 aug 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  This Week in Securum: Up, Down and Sideways
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/4.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 jan 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  Indians Expect Clarity on Securum Taxes within Days
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/5.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 dec 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  Thailand Taking Steps to Regulate ICOs
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/6.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 jan 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  Discover Card’s 44 Million Customers Denied Crypto
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- blog item --> */}
        <div class="col-md-6">
          <div class="blog-item">
            <figure class="blog-thumb">
              <img src="img/blog/7.jpg" alt="" />
            </figure>
            <div class="blog-text">
              <div class="post-date">22 dec 2018</div>
              <h4 class="blog-title">
                <Link to="single-blog.html">
                  Wall Street Price Manipulation? Go Long
                </Link>
              </h4>
              <div class="post-meta">
                <Link to="">
                  <span>by</span> Admin
                </Link>
                <Link to="">
                  <i class="fa fa-heart-o"></i> 234 Likes
                </Link>
                <Link to="">
                  <i class="fa fa-comments-o"></i> 08 comments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="post-loadmore site-btn sb-gradients sbg-line mt-5">
        LOAD MORE
      </button>
    </div>
  );
}
