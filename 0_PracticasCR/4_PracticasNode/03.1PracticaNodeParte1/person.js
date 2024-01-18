/*Ejercicio 2
Primero, crea un archivo llamado person.js. Define y exporta un objeto person con las propiedades name, age, y un método sayHello que muestre por consola el mensaje: "Hola, mi nombre es [name]".*/

const person={
    name:"Pedro",
    age:26,
    sayHello: ()=>{
        console.log(`Hola, mi nombre es ${person.name}`)
    }
};

export default person;