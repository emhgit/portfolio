import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton.jsx';

function NavBar(){
    return (
        <nav>
            <h1><Link to="/" className={styles["nav-link"]}>Elliott Harper</Link></h1>
             <ul>
                <li ><Link to="/about-me" className={styles["nav-link"]}>About Me</Link></li>
                <li ><Link to="/my-projects" className={styles["nav-link"]}>Projects</Link></li>
                <li ><Link to="/contact" className={styles["nav-link"]}>Contact</Link></li>
            </ul>
            <ThemeToggleButton />
        </nav>
    );
}

export default NavBar;