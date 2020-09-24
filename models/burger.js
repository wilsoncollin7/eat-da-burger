const orm = require("../config/orm");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (vals, cb) => {
        console.log("post orm")
        orm.insertOne(vals, (res) => {
            cb(res);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne(objColVals, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;