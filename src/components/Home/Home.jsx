import "./Style.css";
import Seciones from "../Seciones/Seciones"; 
import CookieAlert from '../CookieAlert';
import { useCookies } from 'react-cookie';
import Ingrdienteaa from './Ingredientes';
import { useState } from "react";
const Ingrdiente = Ingrdienteaa()
function Home() {
const [ingredin ,   setIngredient] = useState(Ingrdiente);
const [cookies, setCookie] = useCookies(['cookieAccepted']);

  const handleAccept = () => {
    setCookie('cookieAccepted', true, { path: '/' });
  };

  const handleReject = () => {
    // Puedes realizar acciones específicas al rechazar las cookies
  };


  
  return (
    <>
    <main className="Home ">

    {ingredin.map( (element ) => {
        return(
            <>
            <Seciones 
            img={element.img}
            posicion={element.posicion}
            titulo={element.titulo}
            Ingredientes={element.Ingredientes}
            estilo={element.estilo}
            id={element.id}
            valor={element.valor}
            Titulo_modal={element.Instrucciones.Titulo_modal}
            setIngredient={setIngredient}
            cookies={cookies}


              />
            </>
        )
    })}

        {/* <h2 className="text-center p-3">MAS RESETAS SALUDAVBLE <i className="bi bi-calendar2-event"></i> </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bg-dark">

        {Albums.map(element => { 
        return(
            <Album key={element.id} Titulo={element.Titulo} DesCricion={element.Descriccion} imagenes={element.Img}/>
        )})}
        </div> */}

    <div>

      <CookieAlert onAccept={handleAccept} onReject={handleReject} />
    </div>

    </main>
    </>
  );
}

export default Home;
