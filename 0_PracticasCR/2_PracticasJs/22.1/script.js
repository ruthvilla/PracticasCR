"use strict"

/**EJERCICIO 18
Crea un objeto llamado "estudiante" con la siguiente estructura de propiedades y valores:
nombre: "Marta"
apellido: "Silva"
edad: 22
carrera: "Ingeniería en Computación"
promedio: 9.1
Luego, añádele un método dentro del objeto "estudiante" llamado "presentacion" que, al ser llamado, imprima en consola: "Hola, mi nombre es Marta Silva y estudio Ingeniería de Computación.
 */

const estudiante={
    nombre:"Marta",
    apellido:"Silva",
    edad: 22,
    carrera:"Ingeniería en Computación",
    promedio: 9.1,
    presentacion:function(){
        console.log(`Hola, mi nombre es ${estudiante.nombre} ${estudiante.apellido} y estudio ${estudiante.carrera}`)
    }
}

estudiante.presentacion();


/**EJERCICIO 19
Utiliza el bucle for/in para recorrer las propiedades del objeto "estudiante" e imprimir en la consola la clave y el valor de cada propiedad.*/

for (const key in estudiante) {
        console.log(`${key}: ${estudiante[key]}`);
    
}


/**EJERCICIO 20
 * Usando el objeto estudiante, accede a la propiedad calle que se espera esté dentro de la propiedad direccion, pero de tal manera que no se lance ningún error si la propiedad no existe. Para esto, utiliza el operador de encadenamiento opcional (?.).

El acceso a la propiedad calle debería ser la siguiente:
estudiante.direccion.calle*/

console.log(estudiante.direccion?.calle?.code);


/**EJERCICIO 21
 * Crea una copia del objeto "estudiante" llamada "estudianteCopia" utilizando el spread operator (...). Modifica la propiedad "nombre" de "estudianteCopia" a "Pepe" y verifica que el objeto original "estudiante" no haya sido modificado.*/

const estudianteCopia={...estudiante};
estudianteCopia.nombre="Pepe"

console.log(estudianteCopia);
console.log(estudiante);



/**EJERCICIO 22
 * Utiliza el destructuring para extraer las propiedades "nombre", "apellido" y "carrera" del objeto "estudiante" y asígnalas a variables con los mismos nombres.*/
const {nombre, apellido, carrera}=estudiante;

 console.log(nombre);
 console.log(apellido);
 console.log(carrera);