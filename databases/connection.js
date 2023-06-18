const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'mysqlroot',
    database: 'login_community',
    insecureAuth: true
});

connection.connect() //function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = connection;