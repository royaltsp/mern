import accountReducer from './accountReducer'
import userReducer from './userReducer'
import testCaseReducer from './testCaseReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    user: userReducer,
    account: accountReducer,
    testCaseReducer
})
