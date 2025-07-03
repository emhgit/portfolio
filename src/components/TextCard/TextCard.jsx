import React from "react";
import styles from "./TextCard.module.css";

const TextCard = (props) => {
  const title = props.title;
  const bodyText = props.body;
  const children = props.children;

  return (
    <div className={styles["text-card"]}>
      <h2>{title ? title : null}</h2>
      <p className={styles["text-card-body"]}>{bodyText}</p>
      {children ? (
        <div className={styles["text-card-children"]}>{children}</div>
      ) : null}
    </div>
  );
};

export default TextCard;
