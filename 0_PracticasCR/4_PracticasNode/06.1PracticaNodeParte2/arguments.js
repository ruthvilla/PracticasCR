import path from 'path';
import fs from "fs/promises";
import {format} from "date-fns";


// Array con el nombre de los argumetnos válidos.
const validArgvs = ['--dirname', '--filename', '--time', '--log', '--delete'];

// Ruta absoluta del directorio que contiene el archivo en ejecución.
const dirname = process.cwd();

// Obtenemos el nombre del archivo. Para ello obtenemos la ruta absoluta, hacemos un split
// y obtenemos el último elemento del array con el método pop.
const filename = path.basename(process.argv[1]);

// Obtenemos los argumentos a partir de la posición 2 del array de argumentos.
const args = process.argv.slice(2);

// Obtenemos la fecha y la formateamos.
const date = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

// Función principal.
const main = async () => {
    try {
        // Lanzamos un error si hay argumentos no válidos a partir de la posición 2.
        for (const argv of args) {
            if (!validArgvs.includes(argv)) {
                throw new Error(`El argumento "${argv}" no es válido.`);
            }
        }

        // Si los argumentos --log y --delete figuran a la vez lanzamos un error.
        if (args.includes('--log') && args.includes('--delete')) {
            throw new Error(
                `No es posible combinar el argumento "--log" con "--delete"`
            );
        }

        // Si existe el argumento "--dirname" mostramos la ruta absoluta al directorio del archivo actual.
        if (args.includes('--dirname')) {
            console.log(`Directorio: ${dirname}`);
        }

        // Si existe el argumento "--filename" mostramos la ruta absoluta al directorio del archivo actual.
        if (args.includes('--filename')) {
            console.log(`Archivo: ${filename}`);
        }

        // Si existe el argumento "--time" mostramos la fecha y hora actuales.
        if (args.includes('--time')) {
            console.log(`Hora: ${date}`);
        }

        // Si existe el argumento "--log" guardamos la información en "info.txt".
        if (args.includes('--log')) {
            // Creamos o actualizamos el fichero "info.txt" con la info correspondiente.
            await fs.writeFile(
                'info.txt',
                `[${date}] - [${dirname}] - [${filename}]`,
                'utf-8'
            );

            console.log('Fichero actualizado');
        }

        // Si existe el argumento "--delete" eliminamos el fichero "info.txt".
        if (process.argv.includes('--delete')) {
            // Eliminamos el fichero "info.txt".
            await fs.unlink('info.txt');

            console.log('Fichero eliminado');
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('El archivo no existe');
        } else {
            console.error(err);
        }
    }
};

// Llamamos a la función principal.
main();