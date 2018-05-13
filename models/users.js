module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        // id: {
        //     type: DataTypes.INTEGER
        //     , autoIncrement: true
        //     , primaryKey: true
        // },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email_address: {
            type: DataTypes.STRING,
            isUnique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING
            , allowNull: false
        }
    });
    // Users.associate = function(models) {
    //     // Associating Users with Activities
    //     // When a User is deleted, also delete any Activities
    //     Users.hasMany(models.Activities, {
    //       onDelete: "cascade"
    //     });
    //   };
    
      return Users;
    };