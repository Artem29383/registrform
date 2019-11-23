import { combineReducers, createStore } from "redux";
import formReducer from "./Form-Reducer";

const reducer = combineReducers(
  {
    formData: formReducer
  }
);

const store = createStore(reducer);

export default store;