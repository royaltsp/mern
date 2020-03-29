export const loadUser = () => {
  return dispatch => {
    dispatch(userLoading());
    setTimeout(() => {
      dispatch({
        type: "SAVE_USER",
        payload: {
          name: "Shubham"
        }
      });
      dispatch(userLoaded());
    }, 5000);
  };
};

const userLoading = () => {
  return {
    type: "USER_LOADING"
  };
};

const userLoaded = () => {
  return {
    type: "USER_LOADED"
  };
};
