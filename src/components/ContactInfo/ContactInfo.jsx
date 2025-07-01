import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <h2>My Contact Info</h2>
      <div className={styles["contact-details"]}>
        <p>
          <strong>Email:</strong> eharper0815@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (469)-881-0511
        </p>
        <p>
          You can contact me through these channels, or use the form below and
          I'll get back to you
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
