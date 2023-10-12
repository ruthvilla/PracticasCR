"use strict"

let hora=0

do {console.log(`Son las ${hora}:00`);
   hora++;
   }
    
while (hora<=7);

for (let horaCucu = 8; horaCucu < 13; horaCucu++) {
    let repeticion="CUCÚ!".repeat(horaCucu)
    console.log(`Son las ${horaCucu}:00. ${repeticion}`);
    } 
    
for (let hora3 = 13; hora3 < 23; hora3++) {
    let repeticion2="CUCÚ!".repeat(hora3-12)
    console.log(`Son las ${hora3}:00. ${repeticion2}`);
}

console.log("Son las 23:00");