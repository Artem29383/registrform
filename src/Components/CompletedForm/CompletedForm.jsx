import React from 'react';
import classes from './CompletedForm.module.css';
import CompletedElement from "./CompletedElement";

const CompletedForm = ({dataForm}) => {
  const Naming = ['Name', 'Email', 'Password', 'Date of Birth', 'Phone number'];
  let inputs = Object.values(dataForm).map((i, index) => {
    return <CompletedElement key={index} i = {i} index = {index} Naming={Naming}/>
  });
  
	return (
		<form className={classes.completedForm}>
			{inputs}
		</form>
	)
};

export default CompletedForm;