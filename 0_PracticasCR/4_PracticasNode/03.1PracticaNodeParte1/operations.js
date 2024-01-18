/*Ejercicio 1 
Crea un archivo llamado operations.js. Posteriormente define y exporta funciones para sumar, restar, multiplicar y dividir.

Ahora crea un archivo app.js, importa las funciones del fichero anterior y haz uso de ellas dentro de un console.log.

No te olvides de inicializar el proyecto y añadir en el package.json la instrucción necesaria para trabajar con módulos ES6.*/

const sum =(a,b)=>a+b;
const res =(a,b)=>a-b;
const mul =(a,b)=>a*b;
const div =(a,b)=>a/b;

export{
    sum,
    res,
    mul,
    div
}