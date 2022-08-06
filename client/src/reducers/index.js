import { combineReducers } from "redux";
import appointment from "./appointment";
import patients from "./patients";

export default combineReducers({ appointment, patients})