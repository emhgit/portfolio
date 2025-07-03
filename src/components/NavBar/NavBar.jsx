import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton.jsx";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["nav-brand"]}>
        <h1 className={styles["nav-h1"]}>
          <Link to="/" className={styles["nav-link"]} onClick={closeMenu}>
            Elliott Harper
          </Link>
        </h1>
      </div>

      <div
        className={`${styles["nav-menu"]} ${
          isMenuOpen ? styles["nav-menu-open"] : ""
        }`}
      >
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <Link
              to="/about-me"
              className={styles["nav-link"]}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link
              to="/experience"
              className={styles["nav-link"]}
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link
              to="/contact"
              className={styles["nav-link"]}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles["nav-controls"]}>
        <ThemeToggleButton />
        <button
          className={`${styles["hamburger"]} ${
            isMenuOpen ? styles["hamburger-open"] : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
          <span className={styles["hamburger-line"]}></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
