import { combineReducers } from "redux";
import AuthReducer from "./auth.reducers";
import productListReducers from "./product.reducers";

const rootReducer = combineReducers({
  authentication: AuthReducer,
  products: productListReducers
});
export default rootReducer;
