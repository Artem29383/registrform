import React from 'react';
import classes from "./CompletedForm.module.css";

const CompletedElement = ({i, index, Naming}) => {
  return (
    <div  className={classes.item}>
      <span className={classes.naming}>{Naming[index]}:</span>
      <input readOnly className={classes.field} value={i}/>
    </div>
  );
};

export default CompletedElement;