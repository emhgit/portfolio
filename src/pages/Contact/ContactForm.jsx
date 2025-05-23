import React from 'react'
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form id={styles["contact-form"]} action="" >
        <fieldset>
            <label>Name (Required)</label> 
            <input type="text" id="first" name="first" placeholder="First Name" required></input>

            <input type="text" id="last" name="last" placeholder="Last Name" required></input>
        </fieldset>

        <fieldset>
            <label for="email">Email (Required)</label>
            <input type="email" id="email" name="email" placeholder="Email" required></input>
        </fieldset>

        <fieldset>
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Phone"></input>
        </fieldset>

        <fieldset>
            <button type="submit">Submit</button>
        </fieldset>
    </form>
  )
}

export default ContactForm