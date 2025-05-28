import React, { useState } from 'react'
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";

const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;
const ContactForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new URLSearchParams();
    formData.append("first", first);
    formData.append("last", last);
    formData.append("email", email);
    formData.append("phone", phone);
    console.log(WEB_APP_URL);

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString(),
      });

      if (response.ok) {
        navigate("/contact/thank-you");
      } else throw new Error("Response not ok");

    } catch (error) {
      console.error(error);
      alert("Form submission failed.");
    }
  };

  return (
    <form id={styles["contact-form"]} onSubmit={handleSubmit}>
      <fieldset>
        <label>Name (Required)</label>
        <input
          type="text"
          name="first"
          placeholder="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email (Required)</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default ContactForm