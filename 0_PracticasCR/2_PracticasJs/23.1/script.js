"use strict"

/**EJERCICIO 23
 * Crea un array con los números del 1 al 6 e imprime por consola el valor del quinto elemento. */

const arrayNum=[1,2,3,4,5,6,7,8,9];
console.log(arrayNum[4]);

/**EJERCICIO 24
 * Usa el bucle for/of para recorrer e imprimir en la consola los elementos del array 'colores', que incluye "rojo", "azul", "verde", "amarillo" y "naranja". */

 const colores=["rojo", "azul", "verde", "amarillo","naranja"]
  for (const color of colores) {
    console.log(color);
  }

  /**EJERCICIO 25
 * Dado el siguiente array de frutas, utiliza el método push() para agregar las frutas 'fresa' y 'mango' al final del array. Luego, imprime en la consola el array modificado y la nueva longitud del array. */

  const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
  frutas.push("fresa","mango");
  console.log(frutas);
  console.log(frutas.length);

  /**EJERCICIO 26
 * En el siguiente array de frutas, utiliza el método splice() para eliminar las frutas en las posiciones 1 y 2 y agregar las frutas 'fresa' y 'mango' en su lugar. Luego, imprime en la consola el array modificado y el array de frutas eliminadas. */

  const frutas1 = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
  const eliminasFrutas=frutas1.splice(1,2,"fresa","mango");
  console.log(frutas1);
  console.log(eliminasFrutas);

  /**EJERCICIO 27
 * Dado el siguiente array de frutas, utiliza el método includes() para determinar si el array contiene las frutas 'uva' y 'cereza'. Luego, imprime en la consola los resultados. */

  const frutas2 = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
  console.log(`El array contiene uva:${frutas2.includes("uva")}`);
  console.log(`El array contiene cereza:${frutas2.includes("cereza")}`);