const connection = require("../config/connection");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ??;`;
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, vals, cb) => {
        const queryString = "INSERT INTO ?? (name, devoured) VALUES (?, ?);";

        console.log(queryString);

        connection.query(queryString, [table, vals[0], vals[1]], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    update: (table, objColVals, condition, cb) => {
        const queryString = "UPDATE ?? SET ?? WHERE ?;";

        console.log(queryString);

        connection.query(queryString, [table, objColVals, condition], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;