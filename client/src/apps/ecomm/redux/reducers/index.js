import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default rootReducer