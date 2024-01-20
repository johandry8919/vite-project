import { useEffect } from "react";
import Modal from "../Modal/Modal";
import MyButton from "../MyButton/MyButton";
import "./seccion.css";
import { useState } from "react";

function Seciones({
  img,
  posicion,
  titulo,
  descricion,
  estilo,
  id,
  valor,
  restas,
  Instrucciones,
  Prepara,
  Mezcla,
}) {
  
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = 200; // Puedes ajustar esto según sea necesario
      const triggerPosition2 =500; // Puedes ajustar esto según sea necesario
      const scrollPosition = window.scrollY;




      if (scrollPosition > triggerPosition && !isVisible) {
        setIsVisible(true);
      }else if (scrollPosition  > triggerPosition2 && !isVisible) {
        setIsVisible2(true);
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
  const containerStyle2 = {
    opacity: isVisible2 ? 1 : 0,
    transform: isVisible2 ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s, transform 0.5s",
  };
  return (
    <>
      <section className={estilo}>
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
            <div className="col-12 col-md-4 mt-3 text-center">
              <h2>{titulo}</h2>
              <p
                id="animeContainer"
                style={containerStyle}
                className="parrafo fs-2  mt-5 p-3"
              >
                {descricion}
              </p>
              <MyButton id={id} />
            </div>

            <Modal
              Descriccion={restas}
              titulo={titulo}
              staticBackdrop={valor}
              restas={restas}
              Instrucciones={Instrucciones}
              Prepara={Prepara}
              Mezcla={Mezcla}
            />
          </div>
        ) : (
          <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
            <div className="col-12 col-md-4 mt-3 text-center cont">
              <h2>{titulo}</h2>
              <p className="parrafo fs-2 mt-6 mt-4 p-3">{descricion}</p>
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

            <Modal
              Descriccion={restas}
              titulo={titulo}
              staticBackdrop={valor}
              restas={restas}
              Instrucciones={Instrucciones}
              Prepara={Prepara}
              Mezcla={Mezcla}
            />
          </div>
        )}
      </section>
    </>
  );
}

export default Seciones;
