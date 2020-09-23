const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgerController");

app.use(routes);

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON http://localhost:" + PORT);
});