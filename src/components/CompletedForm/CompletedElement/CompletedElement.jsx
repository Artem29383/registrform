import React from 'react';
import classes from './CompletedElement.module.css';

const CompletedElement = ({ field, dataFormItem }) => (
  <div className={classes.item}>
    <span className={classes.naming}>{field}:</span>
    <div className={classes.field}>{dataFormItem}</div>
  </div>
);

export default CompletedElement;