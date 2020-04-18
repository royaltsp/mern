import { CHANGE_USER } from "../actions/userTypes";
const initialState = [{ name: "Shubham" }, { name: "Akshay" }];

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return state.map((user) =>
        user.name == "Shubham" ? action.payload : user
      );
    default:
      return state;
  }
};
