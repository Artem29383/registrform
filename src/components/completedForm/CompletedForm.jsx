import React from 'react';
import classes from './CompletedForm.module.css';
import CompletedElement from './CompletedElement';
import useSelector from '../../hooks/useSelector';
import { getDataFormSelector } from '../../models/selectors';

const CompletedForm = () => {
  const dataForm = useSelector(getDataFormSelector);
  const inputs = Object.entries(dataForm).map((dataFormItem, index) =>
    <CompletedElement
      key={index}
      dataFormItem={dataFormItem}
    />);
  
  return (
    <form className={classes.completedForm}>
      {inputs}
    </form>
  )
};

export default CompletedForm;