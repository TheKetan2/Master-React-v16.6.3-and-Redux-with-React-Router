import { combineReducers } from "redux";
import postReducers from "./postReducers";
import usersReducers from "./usersReducers";
export default combineReducers({ posts: postReducers, users: usersReducers });
