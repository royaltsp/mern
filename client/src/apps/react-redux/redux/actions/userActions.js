import { CHANGE_USER } from "./userTypes";
export const changeUser = (user) => {
  return {
    type: CHANGE_USER,
    payload: user,
  };
};
