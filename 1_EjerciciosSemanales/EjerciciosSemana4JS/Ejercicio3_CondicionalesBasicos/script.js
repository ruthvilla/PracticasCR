"use strict"

// Escribe aquí tu código

let nombre="Marta";
let edad=64;
if (edad<12) {
    console.log(`A ${nombre} le corresponde el descuento infantil (menores de 12años)`);
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

//esta opcion es mas sucia. Samuel lo hizo con else if

// if
// else if
// else if
// else



