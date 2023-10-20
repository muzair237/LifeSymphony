import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/reducer";

//Benchmark

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
});

export default rootReducer;
