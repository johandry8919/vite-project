function Modal({ descripcion, titulo, staticBackdrop, restas, Instrucciones, Prepara, Mezcla }) {
    const renderList = (list) => (
      <ul>
        {Object.values(list).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  
    return (
      <div className="modal fade text-dark" id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{titulo}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>{restas.Titulo}</h3>
              {renderList(restas)}
  
              <h3>{Instrucciones.Titulo}</h3>
              {renderList(Instrucciones)}
  
              <h3>Prepara las Verduras</h3>
              {renderList(Prepara)}
  
              <h3>{Mezcla.Titulo}</h3>
              {renderList(Mezcla)}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Descarga restas</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;