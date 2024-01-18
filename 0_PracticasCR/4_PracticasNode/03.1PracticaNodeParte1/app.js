
//Ejercicio 1
import { 
    sum,
    res,
    mul,
    div 
} from "./operations.js"

console.log(`Resultado de la suma:${sum(2,2)}`);

console.log(`Resultado de la suma:${res(5,2)}`);

console.log(`Resultado de la suma:${mul(4,2)}`);

console.log(`Resultado de la suma:${div(6,2)}`);


//Ejercicio 2
import person from "./person.js"
console.log(`Nombre:${person.name}`);
console.log(`Edad:${person.age}`);
person.sayHello();