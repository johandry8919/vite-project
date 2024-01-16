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



const Receta_1 ={
    Titulo:'Ingrediente',
    A:'1 taza de quinoa',
    B:'2 tazas de espinacas frescas',
    C:'1 taza de tomates cherry, cortados por la mitad',
    D:'1 pepino, cortado en rodajas finas',
    F:'1 aguacate, cortado en cubos',
    G:'Jugo de 1 limón',
    H:'Aceite de oliva extra virgen',
    I:'Sal y pimienta al gusto',
}
const Instrucciones_1 ={
    Titulo:'Instrucciones',
    A:'Cocina la Quinoa',
    B:'Enjuaga la quinoa bajo agua fría.',
    C:'Cocina la quinoa según las instrucciones del paquete',
    D:'1 pepino, cortado en rodajas finas',
    F:'Una vez lista, deja enfriar.',
   
}
const Prepara_1 ={
    Titulo:'',
    A:'Lava y corta las espinacas en trozos más pequeños si es necesario.',
    B:'Corta los tomates cherry por la mitad.',
    C:'Pela y corta el pepino en rodajas finas.',
    D:'1 pepino, cortado en rodajas finas',
    F:'Corta el aguacate en cubos.',
   
}
const Mezcla  ={
    Titulo:'Mezcla los Ingredientes:',
    A:'En un tazón grande, combina la quinoa cocida, las espinacas, los tomates cherry, el',
    B:'pepino y el aguacate.', 
}





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
        <Seciones 
        img={ensalada}
         posicion={'left'}
          titulo={titulo_1}
           descricion={descriccion_1}
            estilo={"seccion seccion-2 row align-items-center"}
             id={"#staticBackdrop1"}
              valor={'staticBackdrop1'}
              restas={Receta_1} 
              Instrucciones={Instrucciones_1}
              Prepara={Prepara_1}
              Mezcla={Mezcla}

              />

        <Seciones
         img={forde}
          posicion={''}
           titulo={titulo_2}
            descricion={descriccion_2}
             estilo={"seccion seccion-3 row align-items-center" }
              id={"#staticBackdrop2"}
               valor={'staticBackdrop2'}
                restas={Receta_1} 
                Instrucciones={Instrucciones_1}
                Prepara={Prepara_1}
                Mezcla={Mezcla}

                />
        <Seciones 
        img={sopa}
         posicion={'left'}
          titulo={titulo_3}
           descricion={descriccion_3}
             estilo={"seccion seccion-4 row align-items-center"}
              id={"#staticBackdrop3"}
               valor={'staticBackdrop3'}
                restas={Receta_1}
                 Instrucciones={Instrucciones_1}
                 Prepara={Prepara_1}
                 Mezcla={Mezcla}
                 />

        <Seciones 
        img={sopa} 
        posicion={''} 
        titulo={titulo_4}
         descricion={descriccion_4}
           estilo={"seccion seccion-4 row align-items-center"}
            id={"#staticBackdrop4"} 
            valor={'staticBackdrop4'}
             restas={Receta_1}
              Instrucciones={Instrucciones_1}
              Prepara={Prepara_1}
              Mezcla={Mezcla}

              />

       
        <h2 className="text-center p-3">MAS RESETAS SALUDAVBLE <i className="bi bi-calendar2-event"></i> </h2>
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
