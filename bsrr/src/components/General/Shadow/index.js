import React from "react";

import styles from "./style.module.css";

const Shadow = (props) => {
    return props.show ? <div className={styles.Shadow} onClick={props.click}></div> : null;
}
export default Shadow;