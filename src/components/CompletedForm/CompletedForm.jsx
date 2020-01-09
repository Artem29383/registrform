import React from 'react';
import classes from './CompletedForm.module.css';
import CompletedElement from '../CompletedElement';
import useSelectors from '../../hooks/useSelector';
import {
  getDataFormIdSelector,
  getDataFormSelector
} from '../../models/registrform/selectors';

const CompletedForm = () => {
  const dataForm = useSelectors(getDataFormSelector);
  const dataFormIds = useSelectors(getDataFormIdSelector);
  const inputs = dataFormIds.map(id =>
    <CompletedElement
      key={id}
      field = {dataForm[id].title}
      dataFormItem={dataForm[id].values}
    />);
  
  return (
    <form className={classes.completedForm}>
      {inputs}
    </form>
  )
};

export default CompletedForm;