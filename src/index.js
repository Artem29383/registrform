import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './state/store';
import { Provider } from "react-redux";
import FormRegistration from './components/formToFill/FormRegistration';
import CompletedForm from './components/completedForm/CompletedForm';


const App = () => {
  return (
    <div className="App">
      <FormRegistration />
      <CompletedForm />
    </div>
  );
};


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

