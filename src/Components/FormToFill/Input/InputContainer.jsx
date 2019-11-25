import React, {useState, useCallback, useEffect} from 'react';
import Input from './Input';
import {isValidDate, isValidEmail, isValidName, isValidPassword, isValidPhone} from '../../../Utils/validators';

const InputContainer = ({
  title,
  typeOfInput,
  values,
  setData,
  isFormValidCheck,
  isFormValid
}) => {
  
  const hFor = `${title}-${Math.random()}`;
  
  
  const setValues = useCallback((e) => {
    let value = e.currentTarget.value;
    setData(value, title);
    switch (e.currentTarget.name) {
      case 'name':
        isValidName(value, isFormValidCheck, 'name');
        break;
      case 'email':
        isValidEmail(value, isFormValidCheck, 'email');
        break;
      case 'password':
        isValidPassword(value, isFormValidCheck, 'password');
        break;
      case 'Date of Birth':
        isValidDate(value, isFormValidCheck, 'Date of Birth');
        break;
      case 'Phone number':
        isValidPhone(value, isFormValidCheck, 'Phone number');
        break;
      default:
        break;
    }
  }, [setData]);
  

  
  return (
    <Input
      title={title}
      typeOfInput={typeOfInput}
      values={values}
      setValue={setValues}
      errorMessage={isFormValid}
      hFor={hFor}
    />
  );
};

export default InputContainer;