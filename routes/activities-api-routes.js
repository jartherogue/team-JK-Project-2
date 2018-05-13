var db = require("../models");

module.exports = function(app) {
  app.post("/api/activities", function(req, res) {
    db.Activities.create(req.body).then(function(dbActivitie) {
      res.json(dbActivitie);
    }).catch(function(error){
        res.status(401).json(error);
    })
  });
  // app.post("/api/Activities", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     date: req.body.date,
  //     time: req.body.time,
  //     city: req.body.city,
  //     photo: req.body.photo,
  //     description: req.body.description
  //   })
  //     .then(function(dbActivities) {
  //       res.json(dbActivities);
  //     });
  // });
}
