const connection = require("../config/connection");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ??;`;
        connection.query(queryString, [tableInput, cb], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (vals, cb) => {
        const queryString = "INSERT INTO burgers (name) VALUES (?)";

        console.log(queryString);

        connection.query(queryString, [vals, cb], function(err, result) {
            if (err) throw err;
            console.log("made it before cb")
            cb(result);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        const queryString = `UPDATE burgers SET devoured = true WHERE ${condition};`;

        console.log(queryString);

        connection.query(queryString, [objColVals], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;