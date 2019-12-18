import React from 'react';
import classes from './CompletedForm.module.css';

const CompletedElement = ({ dataFormItem }) => (
  <div className={classes.item}>
    <span className={classes.naming}>{dataFormItem[0]}:</span>
    <input readOnly className={classes.field} value={dataFormItem[1]}/>
  </div>
);

export default CompletedElement;