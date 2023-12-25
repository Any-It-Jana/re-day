import React from "react";
import styles from "./Spinner.module.css";

const Spinner = (props : any) => {
  return <div className={props.color === 'dark' ? styles.darkSpinner : styles.spinner} />;
};

export default Spinner;
