import { useEffect } from "react";
import Modal from "../Modal/Modal";
import MyButton from "../MyButton/MyButton";
import "./seccion.css";
import { useState } from "react";
import {SiSouthwestairlines} from '@icons-pack/react-simple-icons';

function Seciones({
  img,
  posicion,
  titulo,
  Ingredientes,
  estilo,
  id,
  valor,
  Titulo_modal,

}) {
  
    const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = 200; // Puedes ajustar esto según sea necesario
      const scrollPosition = window.scrollY;




      if (scrollPosition > triggerPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const containerStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s, transform 0.5s",
  };

  return (
    <>
      <section key={valor} className={estilo}>
        {posicion == "left" ? (
          <div className="col-md-12 col-12 row  align-items-center justify-content-around">
            <div
              className="col-md-5 col-12 p-0 cont "
              id="animeContainer"
              style={containerStyle}
            >
              <img
                className="img-fluid"
                src={img}
                alt="Ensalada de Quinoa y Verduras"
                width={600}
                height={600}
              />
            </div>
            <div className="col-12 col-md-6 text-center">
              <h2 className="fs-1"> <SiSouthwestairlines title='My title' color='#4C4A73' size={30}/>{titulo} </h2>
              <p
                id="animeContainer"
                style={containerStyle}
                className="parrafo fs-2  p-2"
              >
                {Ingredientes}
              </p>
              <MyButton id={id} />
            </div>

            <Modal 
            staticBackdrop={valor}
            titulo={Titulo_modal}

             />
          </div>
        ) : (
          <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
            <div className="col-12 col-md-6 mt-2 text-center cont">
              <h2 className="fs-1">{titulo}</h2>
              <p className="parrafo fs-2 p-2">{Ingredientes}</p>
            </div>
            <div className="col-md-5 col-12 p-0">
              <img
                width={500}
                height={500}
                className="img-fluid"
                src={img}
                alt="Ensalada de Quinoa y Verduras"
              />
              <MyButton id={id} />
            </div>

            <Modal staticBackdrop={valor}
            titulo={Titulo_modal}
              
            />
          </div>
        )}
      </section>
    </>
  );
}

export default Seciones;
