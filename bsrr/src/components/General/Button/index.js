import React from "react";

import styles from "./style.module.css";

const Button = (props) => {
    return (
        <button onClick={props.clicked} className={`${styles.Button} ${styles[props.btnType]}`}>{props.text.toUpperCase()}</button>
    );
}
export default Button; 