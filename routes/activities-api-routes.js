var db = require("../models");

module.exports = function (app) {
  // GET route for getting all of the activities
  app.get("/api/activities/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbactivities) {
        res.json(dbactivities);
      });
  });

    // Get route for retrieving a single activity
  app.get("/api/activities/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbActivities) {
        res.json(dbActivities);
      });
  }); 
  app.post("/api/activities", function (req, res) {
    db.Activities.create(req.body).then(function (dbActivities) {
      res.json(dbActivities);
    }).catch(function (error) {
      res.status(401).json(error);
    })
  });
}
