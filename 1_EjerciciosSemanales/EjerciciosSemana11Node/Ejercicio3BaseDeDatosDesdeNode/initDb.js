// Importamos el módulo "getPool".
import getPool from './getPool.js';

const crearBaseDatos=async()=>{
    try{
        const pool = await getPool();
        await pool.query('CREATE DATABASE IF NOT EXISTS bootcamp');
        console.log('Base de datos creada con éxito.');
        } catch (err) {
            // Si ocurre un error, muestra un mensaje en la consola.
            console.error(err.message);
        }
    }
crearBaseDatos()

const usarBaseDatos=async()=>{
    try{
        const pool = await getPool();
        await pool.query('USE bootcamp');
        console.log('Base de datos seleccionada.');
        } catch (err) {
            // Si ocurre un error, muestra un mensaje en la consola.
            console.error(err.message);
        }
    }
usarBaseDatos()

// Crea una función para ejecutar la consulta de creación de tabla.
const createTableEstudiantes = async () => {
    try {
        // Obtén una conexión a la base de datos utilizando "getPool".
        const pool = await getPool();

        // Ejecuta la consulta SQL para crear la tabla "users".
        await pool.query(`
            CREATE TABLE IF NOT EXISTS estudiantes(
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(50),
                LastName VARCHAR(50),
                Year INT,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )`);

        console.log('Tabla de usuarios creada con éxito.');
    } catch (err) {
        // Si ocurre un error, muestra un mensaje en la consola.
        console.error(err.message);
    }
};

// Llama a la función para crear la tabla estudiantes
createTableEstudiantes();

const createTableDirecciones= async () => {
    try {
        // Obtén una conexión a la base de datos utilizando "getPool".
        const pool = await getPool();

        // Ejecuta la consulta SQL para crear la tabla "users".
        await pool.query(`
            CREATE TABLE IF NOT EXISTS direcciones(
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                Calle VARCHAR(100),
                CodigoPost INT,
                alumnoId INT UNSIGNED NOT NULL,
                FOREIGN KEY (alumnoId) REFERENCES estudiantes(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )`);

        console.log('Tabla de usuarios creada con éxito.');
    } catch (err) {
        // Si ocurre un error, muestra un mensaje en la consola.
        console.error(err.message);
    }
};

// Llama a la función "createTable" para crear la tabla de usuarios.
createTableDirecciones();