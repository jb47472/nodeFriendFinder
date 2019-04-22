
var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires and Sets Routes for API
require("./app/routing/apiRoutes")(app);
// Requires and Sets Routes for HTML
require("./app/routing/htmlRoutes")(app);

// Starts server and begins listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});