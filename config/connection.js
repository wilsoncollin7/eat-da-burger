const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dean",
    database: "eat_da_burger"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("CONNECTED AS ID " + connection.threadId);
});

module.exports = connection;