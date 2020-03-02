import React from 'react'
import { Route } from 'react-router'
import SignInAndSignUpPage from '../pages/SignInAndSignUpPage'
import ShopPage from '../pages/ShopPage'
import Header from '../components/Header'

export default function EcommRoutes() {
  return (
    <div>
      <Header />
      <Route path="/sign-in-and-sign-up-page" component={SignInAndSignUpPage} />
      <Route path="/shop-page" component={ShopPage} />
    </div>
  )
}
