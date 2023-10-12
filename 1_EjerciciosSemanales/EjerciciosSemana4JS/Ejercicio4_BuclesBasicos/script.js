"use strict"

// Escribe aquí tu código
//Crea un bucle q imprima una linea por cada hora del dia en formato 24h de 0:00 a 23:00
//Si la hora es antes de las 8 de la mañana o posterios a las 22, solo imprime la hora "Son las 3:00"
//Si la hora es entre las 8 y las 22 debe imprimir la hora seguida de "CUCÚ" "Son las 17:00, CUCÚ!"
for (let hora = 0; hora < 24; hora++) {
     
    if (hora>=8 && hora <23) {
        console.log(`Son las ${hora}:00, CUCÚ!`);
    } else {
        console.log(`Son las ${hora}:00`);
    }
}