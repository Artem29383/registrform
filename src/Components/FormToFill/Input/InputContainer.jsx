import React, {useState, useCallback} from 'react';
import Input from './Input';
import {isValidDate, isValidEmail, isValidName, isValidPassword, isValidPhone} from '../../../Utils/validators';

const InputContainer = ({
  title,
  typeOfInput,
  values,
  setData,
  isFormValidCheck
}) => {
  
  const [errorMessage, setErrorMessage] = useState('');
  const hFor = `${title}-${Math.random()}`;
  
  
  const setValues = useCallback((e) => {
    let value = e.currentTarget.value;
    setData(value);
    switch (e.currentTarget.name) {
      case 'Name':
        isValidName(value, setErrorMessage);
        break;
      case 'Email':
        isValidEmail(value, setErrorMessage);
        break;
      case 'Password':
        isValidPassword(value, setErrorMessage);
        break;
      case 'Date of Birth':
        isValidDate(value, setErrorMessage);
        break;
      case 'Phone number':
        isValidPhone(value, setErrorMessage);
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
      errorMessage={errorMessage}
      hFor={hFor}
      isFormValidCheck={isFormValidCheck}
    />
  );
};

export default InputContainer;