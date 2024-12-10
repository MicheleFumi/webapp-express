const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.BB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect((err) => {

    if (err) {
        console.log('error connecting to db:', err);

    } else {
        console.log('connecting successfully');

    }
})

module.exports = connection