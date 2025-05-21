import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from "./ThemeToggleButton.module.css"

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            <img src={theme === "light" ? "src/assets/dark-sun.png" : "src/assets/light-sun.png"} 
            alt="sun-icon" 
            width="50px" 
            height="50px">
            </img>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    );
}

export default ThemeToggleButton