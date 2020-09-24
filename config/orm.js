// =============================================================
// require the connection file
// =============================================================
const connection = require("../config/connection");
// =============================================================
// =============================================================
// setting the orms
// =============================================================
const orm = {
    // =============================================================
    // select all 
    // =============================================================
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ??;`;
        connection.query(queryString, [tableInput, cb], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    // =============================================================
    // insert one
    // =============================================================
    insertOne: (vals, cb) => {
        const queryString = "INSERT INTO burgers (name) VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [vals, cb], function(err, result) {
            if (err) throw err;
            console.log("made it before cb")
            cb(result);
        });
    },
    // =============================================================
    // update one
    // =============================================================
    updateOne: (objColVals, condition, cb) => {
        const queryString = `UPDATE burgers SET devoured = true WHERE ${condition};`;
        console.log(queryString);
        connection.query(queryString, [objColVals], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
    // =============================================================
}
// =============================================================
// export the orms
// =============================================================
module.exports = orm;