module.exports = function (sequelize, DataTypes) {
  const Cars = sequelize.define("Cars", {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 10]
    },
    year: {
      type: DataTypes.INTEGER,
      isDate: true,
      defaultValue: null,
      len: [1, 10]
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 10]
    },

    description: {
      type: DataTypes.TEXT,
      notEmpty: true
    }
  });

  Cars.associate = function (models) {
    Cars.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Cars;
};