const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        console.log("select all")
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    console.log("post")
    burger.insertOne(
        req.body.name, 
        (result) => {
        res.json({ id: result.insertId });
        console.log("insert one")
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

module.exports = router;