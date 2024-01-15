import "./Style.css";
import Seciones from "../Seciones/Seciones"; 
import ensalada from "../../img/ensalada.png";
import forde from "../../img/Food.png";
 import sopa from "../../img/sopa1.png";
import Header from "../Header/Header";
import Album from "../Album/Album";
// posicion , titulo , descricion     left: ;


const titulo_1 = 'Ensalada de Quinoa y Verduras:';
const titulo_2 = 'Pechuga de Pollo a la Parrilla con Limón:';
const titulo_3 = 'Tacos de Pescado con Salsa de Aguacate:';
const titulo_4 = 'Bowl de Burrito con Arroz Integral:';

const descriccion_1 =  `Quinoa, espinacas, tomate cherry, pepino, aguacate y aderezo de limón. `
const descriccion_2 =  `Ingredientes: Pechuga de pollo, aceite de oliva, ajo, limón, sal y pimienta. `
const descriccion_3 =  `Ingredientes: Filete de pescado, tortillas de maíz, repollo rallado y salsa de aguacate. `
const descriccion_4 =  `Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.`

const Receta = [
    {
        taza_de_quinoa: '1 taza de quinoa',
        taza_de_frescas: '2 tazas de espinacas frescas',
        taza_de_tomates: '1 taza de tomates cherry, cortados por la mitad',
        taza_de_pepino: '1 pepino, cortado en rodajas finas',
        taza_de_aguacate: '1 aguacate, cortado en cubos',
        taza_de_limon: 'Jugo de 1 limón',
        taza_de_Aceite: 'Aceite de oliva extra virgen',
        taza_de_sal: 'Sal y pimienta al gusto',
    },

    {
        1:'Cocina la Quinoa',
        2: 'Enjuaga la quinoa bajo agua fría.',
        3: 'Cocina la quinoa según las instrucciones del paquete.',
        4: 'Una vez lista, deja enfriar.',
    }
]


const Albums =[
    {
        id: 1,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:sopa
    },
    {
        id: 2,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:forde
    },
    {
        id: 3,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:sopa
    },
    {
        id: 4,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:ensalada
    },
    {
        id: 5,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:sopa
    },
    {
        id: 6,
        Titulo: "Bowl de Burrito con Arroz Integral:", 
        Descriccion:"Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.",
        Img:sopa
    },


]

function Home() {
  return (
    <>
    <Header/>
    <main className="Home">
        <Seciones img={ensalada} posicion={'left'} titulo={titulo_1} descricion={descriccion_1} estilo={"seccion seccion-2 row align-items-center"} id={"#staticBackdrop1"} valor={'staticBackdrop1'} restas={Receta}/>
        <Seciones img={forde} posicion={''} titulo={titulo_2} descricion={descriccion_2} estilo={"seccion seccion-3 row align-items-center" } id={"#staticBackdrop2"} valor={'staticBackdrop2'}/>
        <Seciones img={sopa} posicion={'left'} titulo={titulo_3} descricion={descriccion_3}  estilo={"seccion seccion-4 row align-items-center"} id={"#staticBackdrop3"} valor={'staticBackdrop3'}/>
        <Seciones img={sopa} posicion={''} titulo={titulo_4} descricion={descriccion_3}  estilo={"seccion seccion-4 row align-items-center"} id={"#staticBackdrop4"} valor={'staticBackdrop4'}/>

        <h2 className="text-center p-3">MAS RESETAS SALUDAVBLE </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bg-dark">

        {Albums.map(element => { 
        return(
            <Album key={element.id} Titulo={element.Titulo} DesCricion={element.Descriccion} imagenes={element.Img}/>
        )})}
        </div>

    </main>
    </>
  );
}

export default Home;
