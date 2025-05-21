import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <h1>Elliott Harper</h1>
             <ul>
                <li class="nav-link"><Link to="/about-me">About Me</Link></li>
                <li class="nav-link"><Link to="/my-projects">My Projects</Link></li>
                <li class="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;