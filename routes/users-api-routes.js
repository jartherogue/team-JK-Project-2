var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
//This is modified for our project. as of 5/12 at end of class, this is the only route we have working.

  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    }).catch(function(error){
        res.status(401).json(error);
    })
  });
};