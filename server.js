// =============================================================
// server file
// =============================================================
const express = require("express");

let PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("SERVER LISTENING ON http://localhost:" + PORT);
});