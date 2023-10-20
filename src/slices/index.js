import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";

//Movies
import MoviesReducer from "./movies/reducer"

//Series
import SeriesReducer from "./webseries/reducer"
// API Key

//Benchmark

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  ForgetPassword: ForgetPasswordReducer,
  Movies: MoviesReducer,
  Series: SeriesReducer
});

export default rootReducer;
