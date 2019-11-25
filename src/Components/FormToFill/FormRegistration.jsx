import React from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './Input/InputContainer';
import classNames from 'classnames';


const FormRegistration = ({
  dataForm,
  setDataFormName,
  isFormValidCheck,
  isFormValid,
  isAccountCreated,
  isAccount
}) => {
  
  const submitHandler = e => {
    e.preventDefault();
  };
  const setLocalStorate = () => {
    if (!dataForm.name || !dataForm.email || !dataForm.password || !dataForm.dateOfBirth || !dataForm.phone) {
      Object.keys(isFormValid[0]).forEach(n => {
      if (!isFormValid[0][`${n}`] && !dataForm[`${n}`]) {
          isFormValidCheck(`Заполните поле.`, `${n}`)
        }
      })
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      isAccountCreated();
    }
  };
  
  
  return (
    <form onSubmit={submitHandler} className={classes.formRegistration}>
      <InputContainer
        title='name'
        typeOfInput="text"
        values={dataForm.name}
        setData={setDataFormName}
        isFormValidCheck={isFormValidCheck}
        isFormValid={isFormValid[0].name}
      />
      <InputContainer
        title='email'
        typeOfInput="email"
        values={dataForm.email}
        setData={setDataFormName}
        isFormValidCheck={isFormValidCheck}
        isFormValid={isFormValid[0].email}
      />
      <InputContainer
        title='password'
        typeOfInput="password"
        values={dataForm.password}
        setData={setDataFormName}
        isFormValidCheck={isFormValidCheck}
        isFormValid={isFormValid[0].password}
      />
      <InputContainer
        title='Date of Birth'
        typeOfInput="text"
        values={dataForm.dateOfBirth}
        setData={setDataFormName}
        isFormValidCheck={isFormValidCheck}
        isFormValid={isFormValid[0].dateOfBirth}
      />
      <InputContainer
        title='Phone number'
        typeOfInput="text"
        values={dataForm.phone}
        setData={setDataFormName}
        isFormValidCheck={isFormValidCheck}
        isFormValid={isFormValid[0].phone}
      />
      <div className={classes.item}>
        <button
          onClick={setLocalStorate}
          className={classNames(classes.submit, isAccount && classes.complete)}>
          {isAccount ? '✓' : 'Create my account'}
        </button>
      </div>
    </form>
  )
};

export default FormRegistration;