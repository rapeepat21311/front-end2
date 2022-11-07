import { combineReducers } from "redux";
import { userRedu } from "./userRedu";

const reducer = combineReducers({
  user: userRedu,
});

export default reducer;
