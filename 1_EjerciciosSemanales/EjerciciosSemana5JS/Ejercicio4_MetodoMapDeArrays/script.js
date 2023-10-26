"use strict"
 /**Edita el archivo index.js para crear un código que, utilizando el método map, genere un nuevo array a partir del array rickandmortyCharacters*.*

Cada personaje del nuevo array tendrá solo las* *propiedades name, status, species y gender.

 Imprimir en la consola el nuevo array .

 Aquí tienes la documentación sobre el método map de los arrays por si la necesitas:

map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */

/**El resultado debe ser:
 * [
  {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    gender: 'Female'
  },
  {
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  }
]
 */
const rickandmortyCharacters = [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      url: "https://rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      url: "https://rickandmortyapi.com/api/character/4",
      created: "2017-11-04T19:22:43.665Z",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      url: "https://rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https://rickandmortyapi.com/api/location/2",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      url: "https://rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Testicle Monster Dimension",
        url: "https://rickandmortyapi.com/api/location/21",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      url: "https://rickandmortyapi.com/api/character/7",
      created: "2017-11-04T19:59:20.523Z",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      url: "https://rickandmortyapi.com/api/character/8",
      created: "2017-11-04T20:03:34.737Z",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      url: "https://rickandmortyapi.com/api/character/9",
      created: "2017-11-04T20:06:54.976Z",
    },
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Worldender's lair",
        url: "https://rickandmortyapi.com/api/location/4",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      url: "https://rickandmortyapi.com/api/character/10",
      created: "2017-11-04T20:19:09.017Z",
    },
  ];
  
  // Escribe aquí tu código

  const datosDeInteres= rickandmortyCharacters.map(usuario=>{
    return usuario.name;
  })
  
  console.log(datosDeInteres);

const datosDeInteres1= rickandmortyCharacters.map(usuario=>{
  for (const key in usuario) {
    console.log(usuario[key]);
  }
})
  
console.log(datosDeInteres1);

