import React, { useCallback } from 'react';
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
      case 'Name':
        isValidName(value, isFormValidCheck, 'Name');
        break;
      case 'Email':
        isValidEmail(value, isFormValidCheck, 'Email');
        break;
      case 'Password':
        isValidPassword(value, isFormValidCheck, 'Password');
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
  }, [setData, title, isFormValidCheck]);
  

  
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