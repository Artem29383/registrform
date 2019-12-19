import React, { memo }  from 'react';
import classes from '../FormRegistration.module.css';
import classnames from 'classnames';
import InputElement from 'react-input-mask';


const Input = ({
  title,
  typeOfInput,
  values,
  setValues,
  errorMessage,
  hFor,
  mask
}) => (
  <div className={classes.item}>
    <label
      htmlFor={hFor}
      className={classnames(
        classes.naming,
        errorMessage && classes.invalid
      )}>
      {title}
    </label>
    <InputElement
      name={title}
      id={hFor}
      className={classes.field}
      type={typeOfInput}
      value={values}
      onChange={setValues}
      mask = {mask}
    />
    <span className={classes.errorMessage}>
      {errorMessage}
    </span>
  </div>
);

export default memo(Input);