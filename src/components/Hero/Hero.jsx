import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <main>
        <div id={styles["image-container"]}>
            <img src="" alt="image-1" />
        </div>

        <section id={styles["hero"]}>
            <h1>Elliott Harper</h1>
            <h2>Full-Stack Developer</h2>
            <div id="socials-container"></div>
            <button><Link to="/about-me" className={styles["nav-link"]}>About Me</Link></button>
        </section>
    </main>
  )
}

export default Hero