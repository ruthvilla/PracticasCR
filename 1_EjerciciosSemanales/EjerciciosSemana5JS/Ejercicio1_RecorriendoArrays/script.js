"use strict"
/**Edita el archivo index.js para crear un código que recorra (usando un bucle) el array de personas e imprima en la consola esto:

Maria es mayor de edad
Ana es menor de edad
Luis es menor de edad
Pepe es mayor de edad
Manuel es mayor de edad
Teresa es menor de edad
Daniel es mayor de edad
Irene es mayor de edad
Alex es menor de edad
 * Para hacer esto crea una función externa al bucle que en cada iteración reciba dos valores name, age y que se encarge de imprimir en la consola la cadena de texto solicitada para cada persona del objeto people.
 */


const people = [
    {
      name: "Maria",
      age: 20,
    },
    {
      name: "Ana",
      age: 14,
    },
    {
      name: "Luis",
      age: 16,
    },
    {
      name: "Pepe",
      age: 35,
    },
    {
      name: "Manuel",
      age: 50,
    },
    {
      name: "Teresa",
      age: 12,
    },
    {
      name: "Daniel",
      age: 27,
    },
    {
      name: "Irene",
      age: 23,
    },
    {
      name: "Alex",
      age: 10,
    },
  ];
  
  
  // Escribe aquí tu código
 /* function edades(){
    //const nombres=[]
      const edades=[]

    for (let i = 0; i < people.length; i++) {
          edades.push(people[i].age);
    //     nombres.push(people[i].name);
    // }
    // console.log(edades);

    for(const age of edades){
      
    if (age<18) {
        console.log(`${people.name} es menor de edad`);
    } else {
        console.log(`${people.name} es mayor de edad`);
    }}
    }      
    
  }
  edades()*/

//EMPEZAMOS LA CLASE CON SAMUEL

  //un objeto accedemos al valor asi
  const user={nombre:"pepe"};
  console.log(user.nombre);
  //un array accedemos al valor asi
  const user1=["manzana", "pera"]
  console.log(user1[1]);

 /*EJEMPLO DE DESTRUCTURING SIN ACABAR VER CLASE
const coche={
  id:1,
  marca: "mazda",
  modelo: 3,
  precio: 20000,
  colores:["negro", "rojo","blanco"],
};

//const {marca:marca, modelo:modelo,precio:precio}=coche; Asi es la forma larga del destructuring
const {marca,modelo,precio}=coche;//asi de forma reducida
console.log();
//el destructurin del array se hace de manera parecida, donde hay valores coloco variables
const[,,c]=colores;//se podria acceder a los 3 datos del array [a,b,c], si solo me quiero quedar con el ultimo dejamos las comas de las dos posiciones anteriores
console.log(c);*/



  /**dos formas de recorrer un array con un bucle, con un for of y de forma manual */

  //1o de forma manual con un for.
  /*i empieza en 0 y empieza a recorrer el Array, por eso siempre empieza en 0, pq es la primera posicion del array.
  con la propiedad .lenth sabemos la cantidad de elementos que tienen un array, pq siempre hay que recordar q los array son objetos*/

  /*el bucle va a dar las vueltas como elementos tiene people, pero va a devolver el numero del array, no los datos, nos va a decir cuantos objetos hay dentro del array*/

  const logIfIsAdult=(name,age)=>{
  
  if (age<18) {
    console.log(`${name} es menor de edad`);
  } else {
    console.log(`${name} es mayor de edad`);
  }
};
  for(let i=0; i<people.length; i++){
    const{name,age}=people[i];
    //Esto es un destructuring es una forma muy buena de sacar datos de objetos, del objeto people guardame el valor de la variable name en la variable x, y guardame el nombre de la edad en la variable y, si la propiedad y el valor tuvieran el mismo nombre, se podria abreviar const {name:name,age:age}
    logIfIsAdult(name,age);
  }

  //2a forma con el for of, la variable con nombre de lo que se va a recorrer en este caso personas del array people y ya recorre el array solo

  for(const person of people){
    const {name, age}=person;
    logIfIsAdult (name, age);
  }
  

 
