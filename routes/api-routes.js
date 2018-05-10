var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

 // GET route for getting all of the todos
 app.get("/api/activities", function(req, res) {

   db.Activitie.findAll({}).then(function(results) {
     res.json(results);
   });
   // Write code here to retrieve all of the todos from the database and res.json them
   // back to the user
 });

 // POST route for saving a new todo. We can create todo with the data in req.body
 app.post("/api/activities", function(req, res) {

   var activities = req.body.text;

   if (req.params.activities) {
   db.Activitie.create({
     text: req.body.text,
     complete: req.body.complete
   }).then(function(result) {
     return res.json(result);
   });
   // Write code here to create a new todo and save it to the database
   // and then res.json back the new todo to the user
 };



 // DELETE route for deleting todos. We can get the id of the todo to be deleted from
 // req.params.id
 app.delete("/api/activities/:id", function(req, res) {
   db.Activitie.destroy({
     text: req.body.text,
     complete: req.body.complete
   }).then(function(dbActivitie) {
     // We have access to the new todo as an argument inside of the callback function
     res.json(dbActivitie);
   // Use the sequelize destroy method to delete a record from our table with the
   // id in req.params.id. res.json the result back to the user
 });
 });

 // PUT route for updating todos. We can get the updated todo data from req.body
 app.put("/api/activities", function(req, res) {
   db.Activitie.update({
     where: {
       text: req.params.text,
       complete: req.params.complete
     }
   }).then(function(results) {
     res.json(dbActivitie);
   });
   });
 });
};