var db = require("../models");

module.exports = function(app) {
  app.post("/api/activities", function(req, res) {
    db.Activities.create(req.body).then(function(dbActivities) {
      res.json(dbActivities);
    }).catch(function(error){
        res.status(401).json(error);
    })
  });
  app.get("/api/myactivities", function(req, res) {
    db.Activities.findAll({}).then(function(activities) {
      res.json(activities);
    });
  });
}