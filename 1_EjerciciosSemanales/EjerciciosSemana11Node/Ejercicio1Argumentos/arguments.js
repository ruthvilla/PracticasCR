/** Crea un archivo llamado arguments.js. El programa debe aceptar los argumentos --dirname y --date:

node arguments.js --dirname: imprime por consola la ruta absoluta al directorio donde se encuentra el archivo.

node arguments.js --time: imprime por consola la hora actual en el formato hh:mm:ss.

Si se inserta un argumento no contemplado debe lanzarse un error con el mensaje: El argumento "${argv}" no es válido.

Ha de ser posible insertar los dos argumentos a la vez.

Utiliza el módulo chalk para colorear el contenido de los console.log de color azul y el contenido de los console.error de color rojo: https://www.npmjs.com/package/chalk 

En este caso necesitarás instalar el módulo chalk en Cooding Rooms. Puedes instalarlo usando la consola que está debajo del editor. Sería una buena idea que, antes de empezar el ejercicio, leas con calma la documentación de este módulo para entender su funcionamiento. A veces toca buscarse la vida y documentarse por cuenta propia. ¡Y recuerda que has de usar ES6 Modules, no CommonJS!*/

//habilitar Es6 npm init -y
//package.json type:module
//dependencias path, fs, date-fns y chalk npm i nombres
//importar funcianalidades de los modulos
import path from 'path';
import fs from 'fs/promises';
import chalk from 'chalk';
import {format} from "date-fns";

//Array de argumentos admitidos
const validArgvs=['--dirname','--date'];
//Ruta absoluta del directorio del archivo
const dirname=process.cwd();
//Seleccionamos argumnetos desde posicion 2 para evitar error en autogenerados
const args=process.argv.slice(2);
//Constante fecha formateada
const date= new Date();
const horaformateada=format(date,`hh:mm:ss`)

//Funcion principal
const principal=async()=>{
    try{//Si encuentra el argumento dirname imprime la ruta
        if(args.includes('--dirname')){
            console.log(chalk.blue(`La ruta del directorio es: ${dirname}`));
        }
        if(args.includes('--date')){
            console.log(chalk.blue(`La hora actual es:${horaformateada}`));
        }
        for(const argv of args){
            if (!validArgvs.includes(argv)) {
                console.error(chalk.red(`El argumento ${argv} no es valido`)) 
            }
        }

    } catch (err){console.error(chalk.reset(`Se ha producido un error:${err.message}`))
      
    }
};

principal();

//node arguments.js --dirname --date --otro