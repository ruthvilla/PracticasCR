"use strict"

//Ejercicio 14
/**Crea una función llamada "saludar" que acepte un parámetro "nombre". La función debe imprimir un mensaje de bienvenida en la consola que incluya el nombre proporcionado.*/

function saludar(name){
    console.log(`Bienvenid@ ${name}!!`);
}

saludar("Maria")

//Ejercicio 15
/**Crea una función anónima que acepte dos parámetros, "a" y "b", y retorne la suma de los dos números. Asigna esta función a una variable llamada "suma".*/

const suma=function(num1, num2){
    return num1+num2;
}
const resultado=suma(5,3)
console.log(resultado);

//Ejercicio 16
/** Crea una función de flecha concisa llamada "calcularPromedio" que acepte dos parámetros, "numero1" y "numero2". La función debe retornar el promedio de los dos números.*/

const calcularPromedio=(numero1, numero2)=>(numero1+numero2)/2;

const resultado1=calcularPromedio(6,4);
console.log(resultado1);

//Ejercicio 17
/**Crea una función llamada "mostrarNumerosPares" que acepte un parámetro "limite". La función debe imprimir en la consola todos los números pares desde 2 hasta el límite proporcionado.*/

function mostrarNumerosPares(limite) {
    for (let i = 2; i <= limite; i++) {
        if (i%2===0) {
            console.log(i);
        }
    }
    
}
mostrarNumerosPares(20);