"use strict"
//Ejercicio 6
 let num1= 7
 let num2= 4
 console.log(`El total de la suma de ${num1} + ${num2} es ${num1+num2}`);

 //Ejercicio 7
 let min=1
 let max=10
 let numeroAleatorio= Math.floor(Math.random ()*(max-min+1)+min);
 console.log(`El numero aleatorio entre ${min} y ${max} es ${numeroAleatorio}`);

 //Ejercicio 8
 const a=5;
 const b=10;
 const c=15;
 let sumaIgual=a+b===c;
 console.log(`La suma de ${a} y ${b} es igual a ${c} es ${sumaIgual}`);

 //Ejercicio 9
if (a%2===0) {
    console.log(`El numero ${a} es par`);}
else {console.log(`El numero ${a} es impar`);}

//Ejercicio 10
let edadPaciente=20;
let peso=64;
let enfermedad=false;

const edadMinima=18;
const edadMaxima=65;
const pesoMinimo=50;
const enfermedadCronica=false;

if (!enfermedad && edadMinima < edadPaciente && edadPaciente < edadMaxima && peso>pesoMinimo) {
    console.log("La persona es apta para donar sangre");
}
else{console.log("La persona no es apta para donar sangre");}
