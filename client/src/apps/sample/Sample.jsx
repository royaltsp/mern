import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default class Sample extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
        </BrowserRouter>
      </div>
    )
  }
}
