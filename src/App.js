import React from 'react';
import './App.css';
import FormRegistration from './Components/FormToFill/FormRegistration';
import CompletedForm from './Components/CompletedForm/CompletedForm';

const App = () => {
  return (
    <div className="App">
      <FormRegistration/>
      <CompletedForm/>
    </div>
  );
};



export default App;
