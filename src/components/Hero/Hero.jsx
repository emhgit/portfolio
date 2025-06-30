import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <main>
      <div id={styles["image-container"]}>
        <img src="assets/menobg.png" alt="image-1" />
      </div>

      <section id={styles["hero"]}>
        <h1>Elliott Harper</h1>
        <h2>Full-Stack Developer</h2>
        <section id={styles["socials-container"]}>
          <a href="https://github.com/emhgit" target="_blank">
            <img
              src={
                theme === "light"
                  ? "assets/github-logo.png"
                  : "assets/light-github-logo.png"
              }
              alt="github logo"
            />
          </a>
          <a href="https://leetcode.com/u/emhleet/" target="_blank">
            <img src="assets/leetcode-logo.png" alt="leetcode logo" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/emhhacker"
            target="_blank"
          >
            <img
              src={
                theme === "light"
                  ? "assets/dark-hackerrank-logo.png"
                  : "assets/hackerrank-logo.png"
              }
              alt="hackerrank logo"
            />
          </a>
        </section>
        <div id={styles["button-container"]}>
          <Link to="/about-me" className={styles["nav-link"]}>
            <button className={styles["button"]}>About Me</button>
          </Link>

          <a
            className={styles["nav-link"]}
            href="assets/resume_v5.pdf"
            target="_blank"
          >
            <button className={styles["button"]}>My Resume</button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
