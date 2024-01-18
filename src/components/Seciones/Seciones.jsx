import Modal from '../Modal/Modal'
import MyButton from '../MyButton/MyButton';


function  Seciones({img , posicion , titulo , descricion , estilo , id ,valor,restas ,Instrucciones,Prepara,Mezcla}) {
    return (
        <>
        <section className={estilo}>
        {posicion == 'left' ?
        <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
           
            <div className="col-md-5 col-12 p-0">
                <img className="img-fluid" src={img} alt="Ensalada de Quinoa y Verduras" />
            </div>
            <div className="col-12 col-md-4 mt-3 text-center">
            <h2>{titulo}</h2>
            <p className="parrafo fs-2  mt-5 p-3">
                {descricion}
            </p>
                

                    <MyButton id={id}/>

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
            : 
            <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
            <div className="col-12 col-md-4 mt-3 text-center">
            <h2>{titulo}</h2>
            <p className="parrafo fs-2 mt-6 mt-4 p-3">
                {descricion}
            </p>

           
            </div>
            <div className="col-md-5 col-12 p-0">
                <img className="img-fluid" src={img} alt="Ensalada de Quinoa y Verduras" />
                <MyButton id={id}/>
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
        }
        </section>
     
        </>
    );
}

export default Seciones;