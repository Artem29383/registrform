import React  from 'react';
import classes from '../FormRegistration.module.css';
import classNames from 'classnames';

const Input = ({
  title,
  typeOfInput,
  values,
  setValue,
  errorMessage,
  hFor
}) => {
  
  return (
    <div className={classes.item}>
      <label
        htmlFor={hFor}
        className={classNames(classes.naming, errorMessage && classes.invalid)}>
        {title}
      </label>
      <input
        name={title}
        id={hFor}
        className={classes.field}
        type={typeOfInput}
        value={values}
        onChange={setValue}
        maxLength='40'
      />
      <span className={classes.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default React.memo(Input);