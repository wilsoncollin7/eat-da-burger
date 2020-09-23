const connection = require("../config/connection");

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ??;`;
        connection.query(queryString, [tableInput, cb], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length,)});`;

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (table, objColVals, condition, cb) => {
        const queryString = `UPDATE ?? SET ? WHERE ${condition};`;

        console.log(queryString);

        connection.query(queryString, [table, objColVals], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;