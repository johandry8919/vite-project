

import Bowl  from "../../img/Bowl.png";
import Tacos  from "../../img/Tacos.png";
import quiota from "../../img/Quinoa.png";
import pechuga from "../../img/pechuga de pollo.png";

 function Ingredientes() {
  return  [
    {
       id:'#staticBackdrop1',
       titulo: 'Ensalada de Quinoa y Verduras:',
       Ingredientes:'Ingredientes: Quinoa, espinacas, tomate cherry, pepino, aguacate y aderezo de limón.',
       estilo:'seccion seccion-1 row align-items-center justify-content-center',
       valor:'staticBackdrop1',
       img:quiota,
       posicion:'left',
       Instrucciones:{
           Titulo_modal:'Ensalada de Quinoa y Verduras',
           valor_1:'Enjuaga la quinoa bajo agua fría.',
           valor_2:'Enjuaga la quinoa bajo agua fría.',
           valor_3:'Enjuaga la quinoa bajo agua fría.',
           valor_4:'Enjuaga la quinoa bajo agua fría.',
           valor_5:'Enjuaga la quinoa bajo agua fría.',
       }


},
    {
       id:'#staticBackdrop2',
       titulo: 'Pechuga de Pollo a la Parrilla con Limón:',
       Ingredientes:'Ingredientes: Pechuga de pollo, aceite de oliva, ajo, limón, sal y pimienta.',
       estilo:'seccion seccion-2 row align-items-center justify-content-center',
       valor:'staticBackdrop2',
       img:pechuga,
       posicion:'',
       Instrucciones:{
           Titulo_modal:'Pechuga de Pollo a la Parrilla con Limón:',
           valor_1:'Enjuaga la quinoa bajo agua fría.',
           valor_2:'Enjuaga la quinoa bajo agua fría.',
           valor_3:'Enjuaga la quinoa bajo agua fría.',
           valor_4:'Enjuaga la quinoa bajo agua fría.',
           valor_5:'Enjuaga la quinoa bajo agua fría.',
       }


},
    {
       id:'#staticBackdrop3',
       titulo: 'Tacos de Pescado con Salsa de Aguacate:',
       Ingredientes:'Ingredientes: Filete de pescado, tortillas de maíz, repollo rallado y salsa de aguacate.',
       estilo:'seccion seccion-3 row align-items-center justify-content-center',
       valor:'staticBackdrop3',
       img:Tacos,
       posicion:'left',
       Instrucciones:{
           Titulo_modal:'Tacos de Pescado con Salsa de Aguacate:',
           valor_1:'Enjuaga la quinoa bajo agua fría.',
           valor_2:'Enjuaga la quinoa bajo agua fría.',
           valor_3:'Enjuaga la quinoa bajo agua fría.',
           valor_4:'Enjuaga la quinoa bajo agua fría.',
           valor_5:'Enjuaga la quinoa bajo agua fría.',
       }


},
    {
       id:'#staticBackdrop4',
       titulo: 'Bowl de Burrito con Arroz Integral:',
       Ingredientes:'Ingredientes: Arroz integral, frijoles negros, maíz, aguacate, tomate y cilantro.',
       estilo:'seccion seccion-4 row align-items-center justify-content-center',
       valor:'staticBackdrop4',
       img:Bowl,
       posicion:'',
       Instrucciones:{
           Titulo_modal:'Bowl de Burrito con Arroz Integral:',
           valor_1:'Enjuaga la quinoa bajo agua fría.',
           valor_2:'Enjuaga la quinoa bajo agua fría.',
           valor_3:'Enjuaga la quinoa bajo agua fría.',
           valor_4:'Enjuaga la quinoa bajo agua fría.',
           valor_5:'Enjuaga la quinoa bajo agua fría.',
       }


},
    
]
}

export default Ingredientes
