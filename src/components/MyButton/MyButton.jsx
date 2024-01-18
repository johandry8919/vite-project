import './MyButton.css'

function MyButton({id}) {
    return (
      <button  type="button" className=" btn-lg btn-block mt-3 mb-3" data-bs-toggle="modal" data-bs-target={id}>
       Receta para preparar
      </button>
    );
  }

  export default MyButton;