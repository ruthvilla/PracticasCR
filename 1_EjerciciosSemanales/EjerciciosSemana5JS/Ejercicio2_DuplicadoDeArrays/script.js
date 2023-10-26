"use strict"
/**
 * Edita el archivo index.js para crear una función que reciba un Array como parámetro y retorne otro Array con los contenidos del Array inicial pero eliminando los duplicados.

Ejecuta esa función pasándole como parámetro el Array names e imprime en la consola el resultado.

Debería imprimir esto:
[
  'A-Jay', 'Manuel',
  'Eddie', 'Su',
  'Reean', 'Zacharie',
  'Tyra',  'Rishi',
  'Arun',  'Kenton'
]
 */

const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
  ];
  
  // Escribe aquí tu código
  function nombres(){
   let array2=[...new Set(names)]
      
   console.log(array2);
  }
  nombres([names])

  /*SOLUCIONES Y EXPLICACIONES DE SAMUEL
  para js hacer new array, se puede hacer solo poniendo los [] y si quieres hacer un objeto en vez de hacer new objet se puede hacer solo con {} otros objetos no hay formas abreviadas entonces se construyen con new
  la funcion removeDuplicates va a recorrer el array*/

  /*Explico varias cosas p el medio para llegar a esta solucion*/

  const removeDuplicates =(array)=>{
    return Array.from(new Set(array)); 
  };
  console.log(removeDuplicates(names));
  /*... spred copia los contenidos de un objeto y los pone en otro objeto, ojo, siempre hay que meterlos en algun sitio, no pueden quedar sueltos*/

  //otr forma de hacerlo es haciendo un for que recorra el array, pero ante