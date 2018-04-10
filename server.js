var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");


var PORT = 3080;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;



// Configure middleware

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/fredWeb");

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//requre things in public
//app.use(express.static("public"));
// Requiring our models for syncing
var db = require("./models");

//all routes 
require("./routes/scraping-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});



