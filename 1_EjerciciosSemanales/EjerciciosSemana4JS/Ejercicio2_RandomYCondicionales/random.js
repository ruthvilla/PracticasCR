"use strict"

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