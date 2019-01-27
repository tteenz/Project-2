const db = require("../models");

module.exports = function (app) {
  // Get all cars
  app.get("/api/car", function (req, res) {
    db.Cars.findAll({
    }).then(function (dbCar) {
      res.json(dbCar);
    });
  });

  // Create a new cars
  app.post("/api/car", function (req, res) {
    db.Cars.create(req.body).then(function (dbCars) {
      res.json(dbCars);
      console.log("API Cars", req.body);
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function (req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function (dbCars) {
      res.json(dbCars);
    });
  });

  // Create a new customer
  app.post("/login", function (req, res) {
    db.Customers.create(req.body).then(function (dbCustomers) {
      res.json(dbCustomers);
    });
  });

  // Delete a customer by id
  app.delete("/api/customer/:id", function (req, res) {
    db.Customers.destroy({ where: { id: req.params.id } }).then(function (
      dbCustomers
    ) {
      res.json(dbCustomers);
    });
  });
};
