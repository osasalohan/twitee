import { combineReducers } from "redux";
import error from "./error";
import currentUser from "./currentUser";
import posts from "./post";

const rootReducer = combineReducers({
  error,
  currentUser,
  posts,
});

export default rootReducer;
