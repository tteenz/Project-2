module.exports = function(sequelize, Datatypes) {
  const User = sequelize.define("users", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Datatypes.INTEGER
    },

    firstname: {
      type: Datatypes.STRING,
      notEmpty: true
    },

    lastname: {
      type: Datatypes.STRING,
      notEmpty: true
    },

    username: {
      type: Datatypes.TEXT
    },

    about: {
      type: Datatypes.TEXT
    },

    email: {
      type: Datatypes.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Datatypes.STRING,
      allowNull: false
    },

    last_login: {
      type: Datatypes.DATE
    },

    status: {
      type: Datatypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  return User;
};
//  Customer.associate = function(models) {
//     Customer.hasMany(models.Cars, {
//       onDelete: "CASCADE"
//     });
//   };
