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
} from '../../models/selectors';
import useAction from '../../hooks/useAction';
import {
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from '../../models/actions';
import { isValidFields } from '../../utils/isValidFields';


const FormRegistration = () => {
  const dataForm = useSelectors(getDataFormSelector);
  const isFormValid = useSelectors(getIsFormValidSelector);
  const isFormValidCheck = useAction(SET_IS_FORM_VALID);
  const isAccountCreated = useAction(SET_IS_ACCOUNT_CREATED);
  const isAccount = useSelectors(getIsAccountSelector);
  
  
  const setLocalStorate = () => {
    if (isValidFields(dataForm, isFormValid)) {
      for (let n in isFormValid) {
        if (!dataForm[n]) {
          isFormValidCheck({ text: `Заполните поле.`, fieldName: n })
        }
      }
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      isAccountCreated();
    }
  };
  
  const type = ['text', 'email', 'password', 'text', 'text', 'number'];
  const InputContainers = Object.keys(dataForm).map((inp, index) =>
    <InputContainer
      key={index}
      title={inp}
      typeOfInput={type[index]}
      values={dataForm[inp]}
      isFormValidCheck={isFormValidCheck}
      isFormValid={isFormValid[inp]}
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