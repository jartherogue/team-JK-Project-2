var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
var Activities = sequelize.define("activitie", {
  id: {
    type: Sequelize.STRING
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
  return Activities;

};

  Activities.sync();


module.exports = Activities;