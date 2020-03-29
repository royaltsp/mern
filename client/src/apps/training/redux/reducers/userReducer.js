const INITIAL_STATE = {
  currentUser: {},
  userLoading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    case "USER_LOADING":
      return {
        ...state,
        userLoading: true
      };
    case "USER_LOADED":
      return {
        ...state,
        userLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
