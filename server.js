var express = require("express");
var sequelize = require("sequelize");
var app = express();

app.use(express.static("public/assets"));

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

var db = require("./models")

app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

var db = require("./models");

app.use("/", routes);

db.sequelize.sync({force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT " + PORT);
      });
})  

