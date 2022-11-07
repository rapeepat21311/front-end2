import { userReducerConst } from "./consUserRed";

export function userRedu(state = null, action) {
  switch (action.type) {
    case userReducerConst.LOG_IN:
      return action.payload;
    case userReducerConst.LOG_OUT:
      localStorage.clear();
      return action.payload;
    default:
      return state;
  }
}
