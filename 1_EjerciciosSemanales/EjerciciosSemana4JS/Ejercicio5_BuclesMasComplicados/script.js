"use strict"
/**Partiendo del código del ejercicio anterior haz que la cantidad de veces que aparezca "CUCÚ!" entre las 8 y las 22 sea correspondiente a la hora, por ejemplo a las 10 de la mañana debería poner:
"Son las 10:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"
Con una dificultad extra: el número de cucús debe ser siempre en correspondiente a las horas en formato 12h y no 24h, por lo que a las 5 de la tarde (17:00) debe poner solo 5 "CUCÚ!" y no 17:
"Son las 17:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"
Como referencia el resultado debe ser este:*/
/**Son las 0:00
Son las 1:00
Son las 2:00
Son las 3:00
Son las 4:00
Son las 5:00
Son las 6:00
Son las 7:00
Son las 8:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 9:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 10:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 11:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 12:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 13:00. CUCÚ! 
Son las 14:00. CUCÚ! CUCÚ! 
Son las 15:00. CUCÚ! CUCÚ! CUCÚ! 
Son las 16:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 17:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 18:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 19:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 20:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 21:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 22:00. CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! 
Son las 23:00*/



for (let hora = 0; hora < 24; hora++) {
     
    if (hora>=8 && hora <23) {
        let repeticion=hora%12||12;//se convierte la hora a formato 12, pero si 12/12 sería valor falsy entonces coge el 12, pq sino a las 12 no haria cucus
        console.log(`Son las ${hora}:00, ${"CUCÚ!".repeat(repeticion)}`);
    } else {
        console.log(`Son las ${hora}:00`);
    }
}




//sin usar repeat añadiendo cucus a cada vuelta del bucle
let cucus="";

for (let hora = 0; hora < 24; hora++,cucus+="CUCÚ!") {
     //en cada vuelta añade un cucu, se pueden añadir mas condiciones a ejecutar en el bucle si la separamos por comas
    if (hora>=8 && hora <23) {
        let repeticion=hora%12||12;//se convierte la hora a formato 12, pero si 12/12 sería valor falsy entonces coge el 12, pq sino a las 12 no haria cucus
        console.log(`Son las ${hora}:00, ${cucus}`);
    } else {
        console.log(`Son las ${hora}:00`);
    }
    if (hora===12) {
        cucus="";//se reinicia la suma de los cucus cuando la hora llega a 12        
    }

}


//MI solucion demasiado compleja
// let hora=0

// do {console.log(`Son las ${hora}:00`);
//    hora++;
//    }
    
// while (hora<=7);

// for (let horaCucu = 8; horaCucu < 13; horaCucu++) {
//     let repeticion="CUCÚ!".repeat(horaCucu)
//     console.log(`Son las ${horaCucu}:00. ${repeticion}`);
//     } 
    
// for (let hora3 = 13; hora3 < 23; hora3++) {
//     let repeticion2="CUCÚ!".repeat(hora3-12)
//     console.log(`Son las ${hora3}:00. ${repeticion2}`);
// }

// console.log("Son las 23:00");