import React, { Component } from 'react'

import './Bootstrap.css'
export default class Bootstrap extends Component {
  render() {
    return (
      <div className='bootstrap'>
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center col-12 col-md-6 col-lg-4">
              Hello
            </div>
            <div className="mx-auto text-center col-12 col-md-6 col-lg-4">
              Hello
            </div>
            <div className="mx-auto text-center col-12 col-md-6 col-lg-4">
              Hello
            </div>
          </div>
          <div className="row">
            <div className="col">Second</div>
            <div className="col-lg-5">Second</div>
            <div className="col">Second</div>
          </div>
          <div className="mb-2">div1</div>
          <div className="my-auto">div2</div>
          <div className="row">
            <div className="mx-auto text-center col-12 col-lg-auto">Third</div>
            <div className="mx-auto text-center col-12 col-lg-auto">Third</div>
            <div className="mx-auto text-center col-12 col-lg-auto">Third</div>
          </div>
        </div>
      </div>
    )
  }
}
