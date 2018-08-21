module.exports = function (sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING(140),
    	allowNull: false
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: 0
    }
  });

  return Burger;
}