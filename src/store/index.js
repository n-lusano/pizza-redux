import { createStore } from "redux";
import reducer from "./reducer";

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//this makes the store visible in the browser

const store = createStore(reducer, enhancer);

export default store;
