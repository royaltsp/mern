const INITIAL_STATE = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bio: "",
  wayToContact: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      alert();
      return {
        ...state,
        id: action.payload._id,
        firstName: action.payload,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        bio: action.payload.bio,
        wayToContact: action.payload.wayToContact
      };
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
