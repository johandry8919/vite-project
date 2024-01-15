import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    return(
        <nav>
       <ul className="nav justify-content-end">
        <li className="nav-item">
            <Link className="nav-link activate" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/otro">Otros</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/">Link</Link>
        </li>
     
</ul>
       </nav>
    )
    
}

export default Nav;