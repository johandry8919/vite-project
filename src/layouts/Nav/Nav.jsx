import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {

    return(
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-body-tertiary " >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Salud y vida</a>
         
    
          <div className="navbar-collapse collapse text-dark" id="navbarsExample04" >
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categoria</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Postre</a></li>
                  <li><a className="dropdown-item" href="#">Ensaladas</a></li>
                  <li><a className="dropdown-item" href="#">Desayunos</a></li>
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