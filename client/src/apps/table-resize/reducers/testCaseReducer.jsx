import { ADD_TEST_CASE, REMOVE_TEST_CASE } from "./testCase.types";

const INITIAL_STATE = [];

const testCaseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TEST_CASE:
      if(state.indexOf(action.payload) === -1)
        return [...state, action.payload]
      return state;
    case REMOVE_TEST_CASE:
      return state.filter(testCaseIndex => {
        return testCaseIndex !== action.payload;
      });
    default:
      return state;
  }
};

export default testCaseReducer;
