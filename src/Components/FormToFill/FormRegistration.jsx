import React from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './Input/InputContainer';
import classnames from 'classnames';
import {submitHandler} from "../../Utils/submitHandler";


const FormRegistration = ({
  dataForm,
  setDataFormName,
  isFormValidCheck,
  isFormValid,
  isAccountCreated,
  isAccount
}) => {
  
  
  
  const setLocalStorate = () => {
    if (!dataForm.Name || !dataForm.Email || !dataForm.Password || !dataForm['Date of Birth'] || !dataForm['Phone' +
    ' number']) {
        for (let n in isFormValid[0]) {
        if (!isFormValid[0][n] && !dataForm[n]) {
          isFormValidCheck(`Заполните поле.`, n)
        }
      }
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      isAccountCreated();
    }
  };
  
  const type = ['text', 'email', 'password', 'text', 'text'];
  let InputContainers = Object.keys(dataForm).map((inp, index) => {
    return <InputContainer
      key = {index}
      title={inp}
      typeOfInput={type[index]}
      values={dataForm[inp]}
      setData={setDataFormName}
      isFormValidCheck={isFormValidCheck}
      isFormValid={isFormValid[0][inp]}
    />
  });
  return (
    <form onSubmit={submitHandler} className={classes.formRegistration}>
      {InputContainers}
      <div className={classes.item}>
        <button
          onClick={setLocalStorate}
          className={classnames(
            classes.submit,
            isAccount && classes.complete
          )}
          disabled={isAccount}>
          {isAccount ? '✓' : 'Create my account'}
        </button>
      </div>
    </form>
  )
};

export default FormRegistration;