
import './Modal.css'

function Modal({staticBackdrop ,titulo}) {



  

    return (
      <div  className="modal fade text-dark " id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable fondo">
          <div className="modal-content fondo">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{titulo}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


             
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