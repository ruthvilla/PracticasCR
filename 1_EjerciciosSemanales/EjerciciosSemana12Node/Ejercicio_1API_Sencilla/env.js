import dotenv from 'dotenv';
dotenv.config();

const { SERVER_HOST,
    SERVER_PORT} = process.env;

export {SERVER_HOST,
    SERVER_PORT
};