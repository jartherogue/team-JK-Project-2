var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
var Activities = sequelize.define("activitie", {
  id: {
    type: Sequelize.STRING
  },
  complete: {
    type: Sequelize.BOOLEAN
  },
  timestamps: false
});
    return Todo;
};
// Syncs with DB
Todo.sync();


module.exports = Todo;