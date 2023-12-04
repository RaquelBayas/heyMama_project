import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER, 
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

async function sendQuery (query, values) {
    const [results] = await connection.query(query, values);
  
    return results;
}

export {connection, sendQuery}