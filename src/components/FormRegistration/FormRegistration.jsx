import React, { useEffect } from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './input/InputContainer';
import classnames from 'classnames';
import useSelectors from '../../hooks/useSelector';
import {
  getDataFormIdSelector,
  getDataFormSelector,
  getIsAccountSelector,
} from '../../models/registrform/selectors';
import useAction from '../../hooks/useAction';
import {
  SET_IS_ACCOUNT_CREATED,
  SET_IS_FORM_VALID
} from '../../models/registrform/actions';
import { isValidFields } from '../../utils/isValidFields';


const FormRegistration = () => {
  const dataForm = useSelectors(getDataFormSelector);
  const dataFormIds = useSelectors(getDataFormIdSelector);
  const formValidCheck = useAction(SET_IS_FORM_VALID);
  const accountCreated = useAction(SET_IS_ACCOUNT_CREATED);
  const isAccount = useSelectors(getIsAccountSelector);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValidFields(dataForm, dataFormIds)) {
      dataFormIds.forEach(id => {
        if (!dataForm[id].isValid && !dataForm[id].values.trim()) {
          formValidCheck({ errorText: 'Заполните поле', id, isValid: false })
        }
      });
    } else {
      localStorage.setItem('formData', JSON.stringify(dataForm));
      accountCreated();
    }
  };
  
  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(dataForm));
  }, [dataForm]);
  
  
  const InputContainers = dataFormIds.map(id =>
    <InputContainer
      key={id}
      title={dataForm[id].title}
      typeOfInput={dataForm[id].type}
      values={dataForm[id].values}
      formValidCheck={formValidCheck}
      name={dataForm[id].name}
      id={id}
      errorMessage={dataForm[id].errorText}
    />
  );
  
  return (
    <form onSubmit={submitHandler} className={classes.formRegistration}>
      {InputContainers}
      <div className={classes.item}>
        <button
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