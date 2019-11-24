import React from 'react';
import classes from './CompletedForm.module.css';

const CompletedForm = ({dataForm}) => {
	return (
		<form className={classes.completedForm}>
			<div className={classes.item}>
				<span className={classes.naming}>Name:</span>
				<span className={classes.field}>{dataForm.name}</span>
			</div>
			<div className={classes.item}>
				<span className={classes.naming}>Email:</span>
				<span className={classes.field}>{dataForm.email}</span>
			</div>
			<div className={classes.item}>
				<span className={classes.naming}>Password:</span>
				<span className={classes.field}>{dataForm.password}</span>
			</div>
			<div className={classes.item}>
				<span className={classes.naming}>Date of Birth:</span>
				<span className={classes.field}>{dataForm.dateOfBirth}</span>
			</div>
			<div className={classes.item}>
				<span className={classes.naming}>Phone number:</span>
				<span className={classes.field}>{dataForm.phone}</span>
			</div>
		</form>
	)
};

export default CompletedForm;