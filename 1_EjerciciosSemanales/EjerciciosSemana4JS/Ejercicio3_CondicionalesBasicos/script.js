"use strict"

// Escribe aquí tu código
/**Edita el archivo index.js para añadir estas variables similares a las del ejercicio anterior:
nombre de tipo String y con el valor "Marta"
edad de tipo Number y con el valor 27
A continuación, crea los condicionales necesarios para imprimir por consola la frase correcta de la siguientes:
A Marta le corresponde el descuento infantil (menores de 12 años)
A Marta le corresponde el descuento juvenil (menores de 30 años)
A Marta le corresponde el descuento de jubilados (mayores de 60 años)
A Marta no le corresponde ningún descuento*/


let nombre="Marta";
let edad=44;
if (edad<12) {console.log(`A ${nombre} le corresponde el descuento infantil (menores de 12años)`);    
} 
else {if (edad<30) {
        console.log(`A ${nombre} le corresponde el descuento juvenil (menores de 30años)`);
        } 
        else {if (edad>=60){
        console.log(`A ${nombre} le corresponde el descuento jubilados (mayores de 60años)`);
        }
         else{
        console.log(`A ${nombre} no le corresponde ningún descuento`);
        }
    }
}


if (edad<12) { console.log(`A ${nombre} le corresponde el descuento infantil (menores de 12años)`); 
}
else if (edad<30) {
    console.log(`A ${nombre} le corresponde el descuento juvenil (menores de 30años)`);
} 
else if (edad>=60){
    console.log(`A ${nombre} le corresponde el descuento jubilados (mayores de 60años)`);
}
else{
    console.log(`A ${nombre} no le corresponde ningún descuento`);
}



//esta opcion es mas sucia. Samuel lo hizo con else if

// if
// else if
// else if
// else



