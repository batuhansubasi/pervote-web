import { combineReducers } from "redux";

import loggedReducer from "./isLogged";
import emailReducer from "./loggedEmail";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  isEmail: emailReducer,
});

export default allReducers;
