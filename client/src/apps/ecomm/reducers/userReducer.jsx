const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        currentUser: action.payload
      }
    case "REMOVE_USER":
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  }
}

export default userReducer;