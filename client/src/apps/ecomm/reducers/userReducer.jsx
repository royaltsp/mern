const INITIAL_STATE = {
  firstName: "Shubham"
}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "CHANGE_NAME":
      return {
        firstName: action.payload
      }
    case "HANDLE_NAME":
      return {
        firstName: action.payload
      }
    case "CHANGE_NAME_AUTOMATICALLY":
      return {
        firstName: action.payload
      }
    default:
      return state
  }
}

export default userReducer;