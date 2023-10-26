"use strict"

let contador=0;

const temporizador = setInterval(function(){
    if(contador%5===0){
        console.log(`El valor del contador: ${contador}`);        
    }
    contador ++;
},1000)



setTimeout(function(){
    clearInterval(temporizador);
        console.log("El temporizador, se paró");
    },10000)