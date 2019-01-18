module.exports = function(sequelize, Datatypes) {
  let Customer = sequelize.define("Customers", {
    name: Datatypes.STRING
  });
  Customer.associate = function(models) {
    Customer.hasMany(models.Cars, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
