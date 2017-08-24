var express = require("express");
var bodyParser = require("body-parser");
var method = require("method-override");
var exphbs = require('express-handlebars');

var newApp = express();

var routes = require("./controllers/eCommerce-controller.js");

var db = require("./models");

var port = process.env.PORT || 3000;

//newApp.use(express.static(process.cwd() + "/public"));

newApp.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
newApp.use(method("_method"));

newApp.engine("handlebars", exphbs({ defaultLayout: "main" }));
newApp.set("view engine", "handlebars");

newApp.use("/", routes(newApp));

db.sequelize.sync({ force: false }).then(function() {
  newApp.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});