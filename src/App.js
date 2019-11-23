import React from 'react';
import './App.css';
import FormRegistration from "./Components/FormToFill/FormRegistration";
import CompletedForm from "./Components/CompletedForm/CompletedForm";
import {connect} from 'react-redux';
import {getDataForm, getIsAccount, getIsFormValid} from "./State/Form-Reselect";
import {
  isAccountCreated,
  isFormValidCheck,
  setDataFormBirth,
  setDataFormEmail,
  setDataFormName,
  setDataFormPassword,
  setDataFormPhone
} from "./State/Form-Reducer";

const App = (props) => {
  return (
    <div className="App">
      <FormRegistration
        dataForm={props.dataForm[0]}
        setDataFormName={props.setDataFormName}
        setDataFormEmail = {props.setDataFormEmail}
        setDataFormPassword={props.setDataFormPassword}
        setDataFormBirth={props.setDataFormBirth}
        setDataFormPhone={props.setDataFormPhone}
        isFormValidCheck = {props.isFormValidCheck}
        isFormValid = {props.isFormValid}
        isAccountCreated = {props.isAccountCreated}
        isAccount = {props.isAccount}
      />
      <CompletedForm dataForm={props.dataForm[0]}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataForm: getDataForm(state),
    isFormValid: getIsFormValid(state),
    isAccount: getIsAccount(state)
  }
};

export default connect(mapStateToProps, {
  setDataFormName,
  setDataFormEmail,
  setDataFormPassword,
  setDataFormBirth,
  setDataFormPhone,
  isFormValidCheck,
  isAccountCreated
})(App);
