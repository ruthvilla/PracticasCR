"use strict"

/**Edita el archivo index.js para:
generar un número random entre 1 y 6  (simulamos el lanzamiento de un dado)
guardar el número en la variable numeroDado
Después, usa esta variable para que por la consola imprima, por ejemplo, el texto:
"Avanza 1 casilla"
¡Cuidado con el plural! Si sale 2 el texto sería:
"Avanza 2 casillas"*/



let min=1
let max=6
let numeroAleatorio= Math.floor(Math.random ()*(max-min+1)+min);
if (numeroAleatorio==1) {
    console.log(`Avanza 1 casilla`);
} else {
    console.log(`Avanza ${numeroAleatorio} casillas`);
}
 

//Samuel tb con operador ternario otra manera
// console.log(`Avanza ${numeroAleatorio} casilla${numeroAleatorio >1 ? "s":""}`);