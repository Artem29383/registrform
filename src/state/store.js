import { combineReducers, createStore } from 'redux';
import reducers from '../models/reducers';

const reducer = combineReducers(
  {
    formData: reducers
  }
);

const store = createStore(reducer);

export default store;