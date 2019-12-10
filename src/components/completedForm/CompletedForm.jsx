import React from 'react';
import classes from './CompletedForm.module.css';
import CompletedElement from './CompletedElement';
import useSelector from '../../hooks/useSelector';
import { getDataFormSelector } from '../../models/selectors';

const CompletedForm = () => {
  const dataForm = useSelector(getDataFormSelector)[0];
  const Naming = ['Name', 'Email', 'Password', 'Date of Birth', 'Phone number'];
  const inputs = Object.values(dataForm).map((i, index) => {
    return <CompletedElement key={index} i={i} index={index} Naming={Naming} />
  });
  
  return (
    <form className={classes.completedForm}>
      {inputs}
    </form>
  )
};

export default CompletedForm;