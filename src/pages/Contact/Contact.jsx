import React from "react";
import ContactForm from "./ContactForm";
import TextCard from "../../components/TextCard/TextCard";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles["form-container"]}>
        <div>
          <ContactInfo />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
