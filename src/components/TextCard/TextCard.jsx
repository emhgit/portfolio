import React from 'react'
import styles from "./TextCard.module.css";

const TextCard = (props) => {
    const title = props.title;
    const bodyText = props.body;

    return (
        <div className={styles["text-card"]}>
            <h2>{title ? title : null}</h2>
            <p>{bodyText}</p>
        </div>
    )
}

export default TextCard