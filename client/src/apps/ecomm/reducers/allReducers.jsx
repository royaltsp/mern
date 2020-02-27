import { combineReducers } from "redux";

import appReducer from './appReducer'
import userReducer from './userReducer'

const allReducers = combineReducers({
  appReducer,
  userReducer
})

export default allReducers;