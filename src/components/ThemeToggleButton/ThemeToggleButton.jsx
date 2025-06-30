import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./ThemeToggleButton.module.css";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={styles["theme-toggle-button"]} onClick={toggleTheme}>
      <img
        src={theme === "light" ? "assets/dark-sun.png" : "assets/light-sun.png"}
        alt="sun-icon"
        width="50px"
        height="50px"
      ></img>
    </button>
  );
};

export default ThemeToggleButton;
