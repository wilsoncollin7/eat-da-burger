// =============================================================
// require our tools and files
// =============================================================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
// =============================================================
// setting the routes
// =============================================================
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});
// =============================================================
router.post("/api/burger", (req, res) => {
    burger.insertOne(
        req.body.name, 
        (result) => {
        res.json({ id: result.insertId });
        console.log("insert one")
    });
});
// =============================================================
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
// =============================================================
// =============================================================
// export the router
// =============================================================
module.exports = router;