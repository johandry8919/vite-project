import { key } from "localforage";

 function Album({Titulo , DesCricion ,imagenes  }) {
  return (
   <div className="container">
       <div className="col-md-12 mt-3">
        <div className="card shadow-sm">
          <img src={imagenes} className="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" />
          <div className="card-body">
            <p className="card-text">{DesCricion}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              </div>
              {/* <small className="text-body-secondary">9 mins</small> */}
            </div>
          </div>
        </div>
      </div>
   </div>
  
 
  );
}
export default Album;