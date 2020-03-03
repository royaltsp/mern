import React from 'react'
import { Route, Switch } from 'react-router'
import SignInAndSignUpPage from '../pages/SignInAndSignUpPage'
import ShopPage from '../pages/ShopPage'
import Header from '../components/Header'
import Ecomm from '../Ecomm'

export default function EcommRoutes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Ecomm} />
        <Route path="/sign-in-and-sign-up-page" component={SignInAndSignUpPage} />
        <Route path="/shop-page" component={ShopPage} />
      </Switch>
    </div>
  )
}
