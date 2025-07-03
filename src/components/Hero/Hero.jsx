import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <div>
        <img src="assets/me-removebg-preview.png" alt="image-2" />
      </div>

      <section id={styles["hero"]}>
        <h1>Elliott Harper</h1>

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
            href="https://www.fiverr.com/elliott_harper?public_mode=true"
            target="_blank"
          >
            <img src="assets/fiverr-logo.png" alt="fiverr logo" />
          </a>
        </section>
        <div id={styles["button-container"]}>
          <Link to="/about-me" className={styles["nav-link"]}>
            <button className={styles["button"]}>About Me</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
