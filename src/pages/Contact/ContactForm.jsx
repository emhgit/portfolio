import React, { useState } from 'react'
import styles from "./ContactForm.module.css";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxdnfEh04uQ7uyJM8iTGBKghqdw7U-vFwQ5t6YAl4IuUH89EOAEziwIAyQekIq0S4lBzg/exec";
const ContactForm = () => {
  return (
    <form 
    id={styles["contact-form"]}
    action={WEB_APP_URL}
    method="POST" 
    >
        <fieldset>
            <label>Name (Required)</label> 
            <input type="text"
            id="first"
            name="first"
            placeholder="First Name"
            required>
            </input>

            <input type="text" 
            id="last" 
            name="last" 
            placeholder="Last Name" 
            required>
            </input>
        </fieldset>

        <fieldset>
            <label for="email">Email (Required)</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email"
            required>
            </input>
        </fieldset>

        <fieldset>
            <label for="phone">Phone Number</label>
            <input 
            type="text" 
            id="phone" 
            name="phone" 
            placeholder="Phone"
            >
            </input>
        </fieldset>

        <fieldset>
            <button type="submit">Submit</button>
        </fieldset>
    </form>
  )
}

export default ContactForm