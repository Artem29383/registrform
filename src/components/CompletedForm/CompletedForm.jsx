import React from 'react';
import classes from './CompletedForm.module.css';
import CompletedElement from './CompletedElement';
import useSelector from '../../hooks/useSelector';
import { getDataFormSelector } from '../../models/registrform/selectors';

const CompletedForm = () => {
  const dataForm = useSelector(getDataFormSelector);
  const fields = ['Name', 'Email', 'Password', 'Date of Birth', 'Phone Number', 'Age'];
  const inputs = Object.values(dataForm).map((dataFormItem, index) =>
    <CompletedElement
      key={index}
      field = {fields[index]}
      dataFormItem={dataFormItem}
    />);
  
  return (
    <form className={classes.completedForm}>
      {inputs}
    </form>
  )
};

export default CompletedForm;