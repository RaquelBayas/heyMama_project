import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    port: process.env.MYSQL_ADDON_PORT,
    database: process.env.MYSQL_ADDON_DB,
    password: process.env.MYSQL_ADDON_PASSWORD
});

async function sendQuery(query, values) {
    const [results] = await connection.query(query, values);

    return results;
}

export { connection, sendQuery }