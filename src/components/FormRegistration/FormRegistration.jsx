import React from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './input/InputContainer';
import classnames from 'classnames';
import { submitHandler } from '../../utils/submitHandler';
import useSelectors from '../../hooks/useSelector';
import {
  getDataFormSelector,
  getIsAccountSelector,
  getIsFormValidSelector
} from '../../models/registrform/selectors';
import useAction from '../../hooks/useAction';
import {
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from '../../models/registrform/actions';
import { isValidFields } from '../../utils/isValidFields';


const FormRegistration = () => {
  const dataForm = useSelectors(getDataFormSelector);
  const formValid = useSelectors(getIsFormValidSelector);
  const formValidCheck = useAction(SET_IS_FORM_VALID);
  const accountCreated = useAction(SET_IS_ACCOUNT_CREATED);
  const isAccount = useSelectors(getIsAccountSelector);
  
  
  const setLocalStorate = () => {
    if (isValidFields(dataForm, formValid)) {
      for (let n in formValid) {
        if (!dataForm[n]) {
          formValidCheck({ value: `Заполните поле.`, fieldName: n })
        }
      }
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      accountCreated();
    }
  };
  
  const type = ['text', 'email', 'password', 'text', 'text', 'number'];
  const fields = ['Name', 'Email', 'Password', 'Date of Birth', 'Phone number', 'Age'];
  const InputContainers = Object.keys(dataForm).map((inp, index) =>
    <InputContainer
      key={index}
      title={fields[index]}
      typeOfInput={type[index]}
      values={dataForm[inp]}
      formValidCheck={formValidCheck}
      formValid={formValid[inp]}
      name = {inp}
    />
  );
  
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
          disabled={isAccount}
        >
          {isAccount ? '✓' : 'Create my account'}
        </button>
      </div>
    </form>
  )
};

export default FormRegistration;