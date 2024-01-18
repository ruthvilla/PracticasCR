/** Crea un fichero .env y añade la variable de entorno MODE.

En un fichero index.js con la ayuda del módulo dotenv:

Si MODE es igual a development, muestra: "El modo activado es el de desarrollo".
Si MODE es igual a production, muestra: "El modo activado es el de producción" .
Si MODE no está establecida o tiene un valor diferente, muestra: "Por favor, establece la variable de entorno MODE a 'development' o 'production'".

Haz que Git ignore el fichero .env y la carpeta node_modules.

Crea un script personalizado con el nombre de start que ejecute el archivo index.js con Node. 

¿Tienes dudas de cómo funciona el módulo dotenv. Revisa la documentación con calma: https://www.npmjs.com/package/dotenv

Recuerda instalar los módulos necesarios en la consola de Cooding Rooms.*/

//habilitar Es6 npm init -y
//package.json type:module
//Activar nodemon para inicio desde start
//modulo dotenv npm i dotenv y cargamos el metodo
import dotenv from "dotenv";
dotenv.config();
//Creo fichero .env y variable MODE en el
//Creamos fichero gitignore
//traemos la variable de entorno MODE q admite valores development, production o no establecida.
const {MODE}=process.env;


        if(MODE===`development`){
            console.log(`El modo activado es el de desarrollador`);
        }
        else if(MODE===`production`){
            console.log(`El modo activado es el de producción`);
        }
        else{
            console.log(`Por favor, establece la variable de entorno MODE a 'development' o 'production`);
        };
