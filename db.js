const mysql = require('mysql')

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'yube',
    database: 'shortner' // Use the name of the database you created
});

module.exports = connection