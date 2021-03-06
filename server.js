var express = require("express");
var bodyParser = require("body-parser");

// Requiring Models for syncing
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));



// Routes
// =============================================================
require("./routes/activities-api-routes")(app);
require("./routes/html-routes")(app);
require("./routes/users-api-routes")(app);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    
  })
})