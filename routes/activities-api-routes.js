var db = require("../models");

module.exports = function (app) {

  app.get("/api/activities", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Activities.findAll({
      include: [db.Post]
    }).then(function(dbactivities) {
      res.json(dbActivities);
    });
  });


  app.get("/api/activities/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Activities.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Activities]
    }).then(function(dbActivities) {
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
