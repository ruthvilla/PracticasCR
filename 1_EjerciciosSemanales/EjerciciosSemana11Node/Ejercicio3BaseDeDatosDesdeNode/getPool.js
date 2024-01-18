import mysql from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config();
//hacemos el enlace con las variables de entorno
const{MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    PORT_DB}=process.env;

//variable de conexiones
let pool;

//funcion para conexion

const getPool = async () => {
    try {
        // Si no existe un pool de conexiones, créalo.
        if (!pool) {
            pool = mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
                port:PORT_DB
            });
        }

        // Retorna el pool de conexiones.
        return pool;
    } catch (err) {
        console.error(err);
    }
};

// Exportar la función
export default getPool;