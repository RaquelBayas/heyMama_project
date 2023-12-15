import mysql from 'mysql2/promise';

const { MYSQL_ADDON_HOST, MYSQL_ADDON_USER, MYSQL_ADDON_PORT, MYSQL_ADDON_DB, MYSQL_ADDON_PASSWORD } = process.env

const connection = await mysql.createConnection({
    host: MYSQL_ADDON_HOST,
    user: MYSQL_ADDON_USER,
    port: MYSQL_ADDON_PORT,
    database: MYSQL_ADDON_DB,
    password: MYSQL_ADDON_PASSWORD,
});

async function sendQuery(query, values) {
    const [results] = await connection.query(query, values);

    return results;
}

export { connection, sendQuery }