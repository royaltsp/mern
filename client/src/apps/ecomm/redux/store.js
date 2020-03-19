import { createStore, compose, applyMiddleware } from "redux";

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const INITIAL_STATE = {}

const middleWare = [thunk]

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ecommStore = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middleWare))
)

export default ecommStore;