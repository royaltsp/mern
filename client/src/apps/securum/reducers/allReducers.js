import accountReducer from './accountReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    userReducer,
    accountReducer
})

export default allReducers