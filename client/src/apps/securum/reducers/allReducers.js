import accountReducer from './accountReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    user: userReducer,
    account: accountReducer
})
