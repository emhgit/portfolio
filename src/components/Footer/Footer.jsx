import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p>Elliott Harper</p>
      <ul>
        <li>Email: eharper0815@gmail.com</li>
        <li><a href="https://github.com/emhgit">GitHub: emhgit</a></li>
      </ul>
    </footer>
  )
}

export default Footer;