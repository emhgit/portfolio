import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info"]}>
      <h2>Contact Info</h2>
      <div className={styles["contact-details"]}>
        <p>
          <strong>Email:</strong> eharper0815@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (469)-881-0511
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
