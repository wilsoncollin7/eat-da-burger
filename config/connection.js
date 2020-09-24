// =============================================================
// connection file
// =============================================================
const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "dean",
        database: "eat_da_burger"
    });
}

connection.connect((err) => {
    if (err) throw err;
    console.log("CONNECTED AS ID " + connection.threadId);
});

// =============================================================
// export connection
// =============================================================
module.exports = connection;