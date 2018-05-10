var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// module.exports = function(sequelize, DataTypes) {
var Activities = sequelize.define("activitie", {
  id: {
    type: Sequelize.STRING
    , autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: Sequelize.INTEGER
  },
  time: {
    type: Sequelize.TIME
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.BLOB
  },
  description: {
    type: Sequelize.STRING
  }
});

// };

Activities.sync();


module.exports = Activities;