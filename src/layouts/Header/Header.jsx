import './Style.css'
import Titulo from "../../components/Titulo";
import {SiBluesky} from '@icons-pack/react-simple-icons';

function Header() {

  const style = {
    textAlign: "end",
    color:"red"
  }
 return(
  
        <header className="  row  text-center align-items-center justify-content-center  ">
          <div className="col-md-12 col-12 cont text-right">
            <Titulo  titulo={"Comer Bien, Vivir Mejor."} />

            <p className="fs-4 mt-3 text-dark fs-3 animate__animated animate__backInDown">Recetas Saludables para Todos los Gustos <SiBluesky title='My title' color='#512BD4' size={40} /></p>
          </div>
        </header> 
   
 )   
}
export default Header;


