/*Crea un API que haga uso de los siguientes endpoints:

POST a /messages: permite crear un mensaje.
GET a /messages/:messageId: retorna información de un mensaje contreto.

A mayores ha de tener un middleware de ruta no encontrada. Los mensajes se almacenarán en el fichero messages.json dentro de la carpeta data que se encontrará en la raíz del servidor. Utiliza el módulo fs/promises para leer y actualizar la información del fichero cuando consideres oportuno. Para crear un mensaje el cliente deberá enviar a través del body el texto del mensaje.

Por ejemplo, si en messages.json hubiera 3 mensajes debería verse tal que así:
[ 
    { 
        "id": "29b4bb68-9c87-4386-a73e-8d4e54d0edcc",        
        "text": "Primer mensaje"    
    },    
    {        
        "id": "489c925a-bd28-4b1c-b6db-75b112b221d3",        
        "text": "Segundo mensaje"    
    },    
    {        
        "id": "34923def-cb0f-4d0d-9620-fbc0cc042928",        
        "text": "Tercer mensaje"    
    }
]
Para asignar el ID a cada mensaje utiliza la función randomUUID del módulo crypto que se incluye de forma nativa en Node.

No debes preocuparte por el manejo de errores en este ejercicio. De esa parte te encargarás en el segundo ejercicio de esta semana por lo que no necesitarás un middleware de manejo de errores. Simplemente asegúrate de que envías la información correcta para evitar que aparezcan errores o captura los errores con un bloque try catch y muéstralos por consola. Por otro lado, no te olvides de crear un fichero .gitignore para ignorar aquellos archivos o carpetas que consideres oportunos.*/


//Escribe tu codigo
//Iniciamos proyecto npm init -y, habilitamos ES6
//Cargamos modulos express, fs, crypto, dotenv y nodemon

//Importaciones
//modulo express para las peticiones http
import express from 'express';
//variables de entorno
import {SERVER_PORT,SERVER_HOST } from './env.js';
//fs/promises
import fs from 'fs/promises';



//asignamos a app los metodos de express y activadmos la recepcion de json
const app=express();
app.use(express.json());


// Endpoint para crear un mensaje
//Constante par
const guardarMessage=[];

app.post('/messages', async (req, res) => {
    try {
        const {message} = req.body;
        let mensaje={id:crypto.randomUUID(),message}
        //Respuesta si no hay mensaje
        if (!message) {
            return res.status(400).send('El contenido del mensaje es necesario' );
        }
        //guarda mensaje en array
        guardarMessage.push(mensaje)
        //escribir mensaje en fichero .json
        await fs.writeFile('./data/messages.json',JSON.stringify(mensaje),'utf-8')
        res.status(201).send(`El Mensaje ${message} creado exitosamente`);
        
    } catch (error) {
        console.error('El mensaje no se ha guardado')
    }
    
})


app.get('./data/messages.json/:id', (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            const err = new Error('El parametro "id" es requerido');
            err.httpStatus = 400;
            throw err;
        }

        res.send({
            status: 'ok',
            message: `El mensaje con ID: ${id}`,
        });
    } catch (error) {
        console.error('El El id no se encuentra')
    }
        
   
});




// Middleware de ruta no encontrada.
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});



//Activar el servidor
app.listen(SERVER_PORT, ()=>{
    console.log(`Servidor escuchando en: http://${SERVER_HOST}:${SERVER_PORT}`);
})