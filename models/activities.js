module.exports = function (sequelize, DataTypes) {
  var Activities = sequelize.define("Activities", {
      // id: {
      //     type: DataTypes.INTEGER
      //     , autoIncrement: true,
      //     primaryKey: true
      // },
      date: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      time: {
          type: DataTypes.TIME
          , allowNull: false

      },
      city: {
          type: DataTypes.STRING
          , allowNull: false
      },
      state: {
          type: DataTypes.STRING
          , allowNull: false
      },
      photo: {
          type: DataTypes.BLOB
          , allowNull: true
      },
      description: {
          type: DataTypes.STRING
          , allowNull: false
      },
  });
      // Users can have multiple Activities
      // Activities.associate = function(models) {
      //     // We're saying that an activity should belong to a User.
      //     // An activity can't be created without a user due to the foreign key constraint
      //      Activities.belongsTo(models.Users,{
      //       foreignKey: {
      //         allowNull: false
      //       }
      //     });
      //   };
      
        return Activities;
      };