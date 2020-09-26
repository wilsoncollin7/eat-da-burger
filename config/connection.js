// =============================================================
// connection file
// =============================================================
const mysql = require("mysql");

const connection = connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dean",
    database: "eat_da_burger"
});

// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
    
// }

connection.connect((err) => {
    if (err) throw err;
    console.log("CONNECTED AS ID " + connection.threadId);
});

// =============================================================
// export connection
// =============================================================
module.exports = connection;