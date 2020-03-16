import { ADD_TEST_CASE, REMOVE_TEST_CASE } from '../reducers/testCase.types'

export const addTestCase = index => {
  return {
    type: ADD_TEST_CASE,
    payload: index
  }
}

export const removeTestCase = index => {
  return {
    type: REMOVE_TEST_CASE,
    payload: index
  }
}