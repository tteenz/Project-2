let Sequelize = require("sequelize");

let sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
  const Cars = sequelize.define("cars", {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Cars;
};
