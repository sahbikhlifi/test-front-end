import { combineReducers } from "redux";
import AuthReducer from "./auth.reducers";

const rootReducer = combineReducers({
  authentication: AuthReducer
});
export default rootReducer;
