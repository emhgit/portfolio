import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>© Elliott Harper {new Date().getFullYear()}</p>
      <ul>
        <li>
          <a href="https://github.com/emhgit">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
