const INITIAL_STATE = {}

const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SAVE_USER":
      return action.payload
    case "CLEAR_USER":
      return {}
    default:
      return state
  }
}

export default userReducer;