var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Initialize Express
var app = express();

//app.use(logger('dev'));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

//requre all in public
app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fredWeb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  //useMongoClient: true
});


// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



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



