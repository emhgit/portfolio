import React from 'react'
import ContactForm from './ContactForm';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div class={styles["form-container"]}>
      <h1>Contact Me!</h1>
      <ContactForm />
    </div>
  )
};

export default Contact;