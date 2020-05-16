//Pull in required dependencies
const mysql = require("mysql");

//Create the MySQL connection object
let connection;

if (process.env.JAWSDB_URL) {
    //DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //DB is local on localhost
    connection = mysql.createConnection({
        host: "localhost",
        database: "burger_db",
        user: "root",
        port: 3306,
        password: "password"
    });
}


module.exports = connection;