import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-body-tertiary " >
        <div className="container-fluid">
          <Link  className="navbar-brand" to={'/'}>Salud y vida</Link>
         
    
          <div className="navbar-collapse collapse text-dark" id="navbarsExample04" >
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
               <Link className="nav-link " >Home</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categoria</a>
                <ul className="dropdown-menu">
                  <li> <Link className="nav-link text-dark dropdown-item" >Home</Link></li>
                  <li><Link className="nav-link text-dark dropdown-item" >Home</Link></li>
                  <li><Link className="nav-link text-dark dropdown-item" >Home</Link></li>
                </ul>
              </li>
             
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Idioma</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Español</a></li>
                  <li><a className="dropdown-item" href="#">Ingles</a></li>
                  <li><a className="dropdown-item" href="#">Italino</a></li>
                </ul>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
        </>
       
    )
    
}

export default Nav;