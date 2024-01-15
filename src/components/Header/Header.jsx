import './Style.css'
import Titulo from "../Titulo";
function Header() {
 return(
  
           <header className="seccion seccion1 row  ">
          <div className="col-md-5 col-12 cont">
            <Titulo titulo={"Comer Bien, Vivir Mejor."} />

            <p className="fs-4 mt-3 text-dark fs-3">Recetas Saludables para Todos los Gustos</p>
          </div>
        </header> 
   
 )   
}
export default Header;


