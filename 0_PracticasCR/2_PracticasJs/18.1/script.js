"use strict"
//Ejercicio 11 Imprimir numeros impares del 1 al 20
for (let index = 1; index <=20; index++) {
    if (index%2===1) {
        console.log(index);       
    }  
}

//Ejercicio 12 imprimir la tabla de multiplicar del 6
const num=6;
for (let index = 1; index <=10; index++) {
    let resultado=index*num;
    console.log(`${num}x${index}=${resultado}`); 
}

//Ejercicio 13 crea date con fecha y hora de hoy e imprimerlo por consola

const fecha= new Date();
console.log(`La fecha de hoy es:`, fecha);
