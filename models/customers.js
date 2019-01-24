// module.exports = function(sequelize, Datatypes) {
//   let Customer = sequelize.define("Customers", {
//     customerName: Datatypes.STRING
//   });
//   Customer.associate = function(models) {
//     Customer.hasMany(models.Cars, {
//       onDelete: "CASCADE"
//     });
//   };

//   return Customer;
// };
