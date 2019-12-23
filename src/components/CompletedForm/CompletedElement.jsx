import React from 'react';
import classes from './CompletedForm.module.css';

const CompletedElement = ({ field, dataFormItem }) => (
  <div className={classes.item}>
    <span className={classes.naming}>{field}:</span>
    <input readOnly className={classes.field} value={dataFormItem} />
  </div>
);

export default CompletedElement;