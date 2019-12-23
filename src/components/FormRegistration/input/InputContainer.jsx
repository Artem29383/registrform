import React, { useCallback } from 'react';
import Input from './Input';
import {
  isValidAge,
  isValidDate,
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhone
} from '../../../utils/validators';
import useAction from '../../../hooks/useAction';
import { SET_DATAFORM_NAME } from '../../../models/registrform/actions';

const InputContainer = ({
  title,
  typeOfInput,
  values,
  formValidCheck,
  formValid,
  name
}) => {
  
  const hFor = `${title}-${Math.random()}`;
  const setData = useAction(SET_DATAFORM_NAME);
  
  const setValues = useCallback((e) => {
    const value = e.currentTarget.value;
    setData({ value, fieldName: name });
    switch (e.currentTarget.name) {
      case 'Name':
        isValidName(value, formValidCheck, 'name');
        break;
      case 'Email':
        isValidEmail(value, formValidCheck, 'email');
        break;
      case 'Password':
        isValidPassword(value, formValidCheck, 'password');
        break;
      case 'Date of Birth':
        isValidDate(value, formValidCheck, 'dateOfBirth');
        break;
      case 'Phone number':
        isValidPhone(value, formValidCheck, 'phoneNumber');
        break;
      case 'Age':
        isValidAge(value, formValidCheck, 'age');
        break;
      default:
        break;
    }
  }, [setData, title, formValidCheck]);
  
  const masks = {
    'dateOfBirth': "99-99-9999",
    'phoneNumber': "+7 (999) 999-99-99"
  };
  return (
    <Input
      title={title}
      typeOfInput={typeOfInput}
      values={values}
      setValues={setValues}
      errorMessage={formValid}
      hFor={hFor}
      mask = {masks[name]}
    />
  );
};

export default InputContainer;