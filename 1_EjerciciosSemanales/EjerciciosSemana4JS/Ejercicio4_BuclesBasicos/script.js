"use strict"
/**Edita el archivo index.js para crear un bucle que imprima en la consola una línea por cada hora del día en formato 24 horas, de 0:00 a 23:00:
Si la hora es anterior a las 8 de la mañana o posterior a las 22 debe imprimir solo la información de la hora, por ejemplo: "Son las 3:00"
Si la hora está entre las 8 y las 22 debe imprimir la información de la hora seguída de "CUCÚ!", por ejemplo "Son las 17:00, CUCÚ!"*/

//Como referencia el resultado debe ser este:
/**Son las 0:00
Son las 1:00
Son las 2:00
Son las 3:00
Son las 4:00
Son las 5:00
Son las 6:00
Son las 7:00
Son las 8:00, CUCÚ!
Son las 9:00, CUCÚ!
Son las 10:00, CUCÚ!
Son las 11:00, CUCÚ!
Son las 12:00, CUCÚ!
Son las 13:00, CUCÚ!
Son las 14:00, CUCÚ!
Son las 15:00, CUCÚ!
Son las 16:00, CUCÚ!
Son las 17:00, CUCÚ!
Son las 18:00, CUCÚ!
Son las 19:00, CUCÚ!
Son las 20:00, CUCÚ!
Son las 21:00, CUCÚ!
Son las 22:00, CUCÚ!
Son las 23:00*/

// Escribe aquí tu código

for (let hora = 0; hora < 24; hora++) {
     
    if (hora>=8 && hora <23) {
        console.log(`Son las ${hora}:00, CUCÚ!`);
    } else {
        console.log(`Son las ${hora}:00`);
    }
}

//Otra forma por Samuel

for (let hora = 0; hora < 24; hora++) {
     let text=`Son las ${hora}:00`;
    if (hora>=8 && hora <23) {
        text+=", CUCÚ!";
    }
    
    console.log(text);
}
