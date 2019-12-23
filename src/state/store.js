import {
  combineReducers,
  createStore
} from 'redux';
import reducers from '../models/registrform/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


const reducer = combineReducers(
  {
    formData: reducers
  }
);

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));
export default store;