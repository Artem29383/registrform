import React from 'react';
import classes from './FormRegistration.module.css';
import InputContainer from './Input/InputContainer';
import classNames from 'classnames';


const FormRegistration = ({
  dataForm,
  setDataFormName,
  setDataFormEmail,
  setDataFormPassword,
  setDataFormBirth,
  setDataFormPhone,
  isFormValidCheck,
  isFormValid,
  isAccountCreated,
  isAccount
}) => {
	
	const submitHandler = e => {
		e.preventDefault();
	};
	
	
	const setLocalStorate = () => {
		if (isFormValid[0].name &&
			isFormValid[0].email &&
			isFormValid[0].password &&
			isFormValid[0].dateOfBirth &&
			isFormValid[0].phone) {
			localStorage.setItem('formData', JSON.stringify(dataForm));
			isAccountCreated();
		}
	};
	
	
	return (
		<form onSubmit={submitHandler} className={classes.formRegistration}>
			<InputContainer
				title='Name'
				typeOfInput="text"
				values={dataForm.name}
				setData={setDataFormName}
				isFormValidCheck={isFormValidCheck}
			/>
			<InputContainer
				title='Email'
				typeOfInput="email"
				values={dataForm.email}
				setData={setDataFormEmail}
				isFormValidCheck={isFormValidCheck}
			/>
			<InputContainer
				title='Password'
				typeOfInput="password"
				values={dataForm.password}
				setData={setDataFormPassword}
				isFormValidCheck={isFormValidCheck}
			/>
			<InputContainer
				title='Date of Birth'
				typeOfInput="text"
				values={dataForm.dateOfBirth}
				setData={setDataFormBirth}
				isFormValidCheck={isFormValidCheck}
			/>
			<InputContainer
				title='Phone number'
				typeOfInput="text"
				values={dataForm.phone}
				setData={setDataFormPhone}
				isFormValidCheck={isFormValidCheck}
			/>
			<div className={classes.item}>
				<button
					onClick={setLocalStorate}
					className={classNames(classes.submit, isAccount && classes.complete)}>
					{isAccount ? '✓' : 'Create my account'}
				</button>
			</div>
		</form>
	)
};

export default FormRegistration;