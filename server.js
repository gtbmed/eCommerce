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

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  newApp.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});