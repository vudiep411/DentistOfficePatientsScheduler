import { combineReducers } from "redux";
import appointment from "./appointment";
import patients from "./patients";
import authReducer from "./auth";

export default combineReducers({ appointment, patients, authReducer})