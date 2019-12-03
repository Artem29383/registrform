import React from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './Input/InputContainer';
import classnames from 'classnames';
import {submitHandler} from "../../Utils/submitHandler";
import useSelectors from "../../HOOKS/useSelector";
import {getDataFormReselect, getIsAccountReselect, getIsFormValidReselect} from "../../State/Form-Reselect";
import useAction from "../../HOOKS/useDispatch";
import {SET_IS_ACCOUNT_CREATED, SET_IS_FORM_VALID} from "../../Models/ActionConst";


const FormRegistration = () => {
  const dataForm = useSelectors(getDataFormReselect)[0];
  const isFormValid = useSelectors(getIsFormValidReselect);
  const isFormValidCheck = useAction(SET_IS_FORM_VALID);
  const isAccountCreated = useAction(SET_IS_ACCOUNT_CREATED);
  const isAccount = useSelectors(getIsAccountReselect);


  const setLocalStorate = () => {
    if ((!dataForm.Name || isFormValid[0].Name)
      || (!dataForm.Email || isFormValid[0].Email)
      || (!dataForm.Password || isFormValid[0].Password)
      || (!dataForm['Date of Birth'] || isFormValid[0]['Date of Birth'])
      || (!dataForm['Phone number'] || isFormValid[0]['Phone number'])) {
        for (let n in isFormValid[0]) {
        if (!dataForm[n]) {
          isFormValidCheck([`Заполните поле.`, n])
        }
      }
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      isAccountCreated();
    }
  };
  
  const type = ['text', 'email', 'password', 'text', 'text'];
  const InputContainers = Object.keys(dataForm).map((inp, index) => {
    return <InputContainer
      key = {index}
      title={inp}
      typeOfInput={type[index]}
      values={dataForm[inp]}
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
          disabled={isAccount}
         >
          {isAccount ? '✓' : 'Create my account'}
        </button>
      </div>
    </form>
  )
};

export default FormRegistration;