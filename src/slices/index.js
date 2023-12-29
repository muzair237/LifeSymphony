import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/reducer";

// Quote
import QuoteReducer from "./quotes/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Quote: QuoteReducer,
});

export default rootReducer;
