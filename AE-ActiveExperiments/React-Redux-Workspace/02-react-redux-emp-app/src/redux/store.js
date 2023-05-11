import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
//calls root reducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //asynchronous data
);

export default store;
