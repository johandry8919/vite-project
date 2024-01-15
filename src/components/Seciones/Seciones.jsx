import Modal from '../Modal/Modal'


function  Seciones({img , posicion , titulo , descricion , estilo , id ,valor,restas}) {
    return (
        <>

        <section className={estilo}>
        {posicion == 'left' ?
        <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
            <div className="col-md-5 col-12 p-0">
                <img className="img-fluid" src={img} alt="Ensalada de Quinoa y Verduras" />
            </div>
            <div className="col-md-4 mt-3">
            <h2>{titulo}</h2>
            <p className="parrafo fs-2  mt-5">
                {descricion}
            </p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={id}>
                        Receta para preparar
                    </button>

            </div>


            <Modal Descriccion={restas} titulo={titulo} staticBackdrop={valor}/>


        </div>
            : 
            <div className="mt-2 col-md-12 col-12 row  align-items-center justify-content-around">
            <div className="col-md-4 mt-3">
            <h2>{titulo}</h2>
            <p className="parrafo fs-2 mt-6 mt-4">
                {descricion}
            </p>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={id}>
                Receta para preparar
            </button>
            </div>
            <div className="col-md-5 col-12 p-0">
                <img className="img-fluid" src={img} alt="Ensalada de Quinoa y Verduras" />
            </div>

            <Modal Descriccion={restas} titulo={titulo}  staticBackdrop={valor}/>
            </div>
        }
        </section>
     
        </>
    );
}

export default Seciones;