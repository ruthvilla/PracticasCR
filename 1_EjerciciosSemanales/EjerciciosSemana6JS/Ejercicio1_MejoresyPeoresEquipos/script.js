"use strict"

// puntuaciones primera ronda

const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
  ];
  
  // Escribe aquí tu código
  /**con metodos de array.
   * hacer un objeto nuevo que en escore tenga suma y no los elementos sueltos, para ello usamos map, que recibe un callback. Es importante que sea un objeto nuevo, no modificar el original entonces retornamos un objeto nuevo que va a tener el mismo team que el primero, pero en el segudo va a sumar  un calback y el valor actual del acumulador
   */

  const firstRoundWithTotalScores = firstRound.map((object)=>{
    const scoresSum= object.scores.reduce((acc, score)=>{
      return acc+score;
    },0);

    return{
      team: object.team,
      scores: scoresSum,
    }
   
  })
   /**para ordenar con un sort */
  firstRoundWithTotalScores.sort((a,b)=>{
    return a.scores - b.scores;
  });
  
  console.log(firstRoundWithTotalScores);

  const worst=firstRoundWithTotalScores[0];
  const best=firstRoundWithTotalScores[firstRoundWithTotalScores.length-1];

  console.log(`El mejor equipo es ${best.team} con un total de ${best.scores} puntos`);

  console.log(`El peor equipo es ${worst.team} con un total de ${worst.scores} puntos`);


  //**solucion mas optima porque la anterior anida bucles y es menos eficiente, lo bueno es que se repasan los metodos de Arrays */

  let best1= {team:"",scores:0};
  let worst1= {team:"",scores:Infinity};//podria iniciarse en infinity para que cualquier valor que sumemos de los equipos sea menor que infinity

  for(const objeto of firstRound){
    //primero sumamos los puntos que tenemos con reduce
    const totalScores=objeto.scores.reduce((acc,score)=>acc+score,0)
    //ahora comparamos los puntos de totalscores

    if (totalScores>best1.scores) {
      best1={...objeto, scores:totalScores}
    }

    if (totalScores<worst1.scores) {
      worst1={...objeto, scores:totalScores}
    }

  }

  console.log(best1);
  console.log(worst1);