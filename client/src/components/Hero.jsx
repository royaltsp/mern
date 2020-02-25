import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h2>Invest in <span>Securum</span> <br />Securum Trading</h2>
              <h4>
                Use modern progressive technologies of Securum to earn money
          </h4>
              <h3
                id="blink_text"
                style={
                  {
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold"
                  }
                }
              >
                Sign Up for free and get 20 Securum Coins
              </h3>
              <form className="hero-subscribe-from">
                <input type="text" placeholder="Enter your email" />
                <button className="site-btn sb-gradients">Get Started</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="img/laptop.png" className="laptop-image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}
