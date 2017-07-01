module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    // Giving the Author model a name of type STRING
    burger_name: {type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    devoured: {type:DataTypes.BOOLEAN,
      defaultValue: false}
  });
  return Burger;
};