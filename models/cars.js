let Sequelize = require("Sequelize");

let sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
  var Cars = sequelize.define("Cars", {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Cars;
};