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
  name,
  id,
  errorMessage
}) => {
  const hFor = `${title}-${Math.random()}`;
  const setData = useAction(SET_DATAFORM_NAME);
  
  const setValues = useCallback((e) => {
    const values = e.currentTarget.value;
    setData({ id, values });
    switch (e.currentTarget.name) {
      case 'Name':
        isValidName(values, formValidCheck, id);
        break;
      case 'Email':
        isValidEmail(values, formValidCheck, id);
        break;
      case 'Password':
        isValidPassword(values, formValidCheck, id);
        break;
      case 'Date of Birth':
        isValidDate(values, formValidCheck, id);
        break;
      case 'Phone number':
        isValidPhone(values, formValidCheck, id);
        break;
      case 'Age':
        isValidAge(values, formValidCheck, id);
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
      errorMessage={errorMessage}
      hFor={hFor}
      mask = {masks[name]}
    />
  );
};

export default InputContainer;