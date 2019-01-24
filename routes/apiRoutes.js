var db = require("../models");

module.exports = function(app) {
  // Get all cars
  app.get("/api/car", function(req, res) {
    db.Cars.findAll({
      // include: [db.Customers]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
  app.get("/api/cars", function(req, res) {
    res.json({ hello: "hello" });
  });

  // Create a new cars
<<<<<<< HEAD
  app.post("/api/car", function (req, res) {
    db.Cars.create(req.body).then(function (dbCars) {
      console.log("Car", req.body);
      res.json(dbCars);
=======

  app.post("/api/car", function(req, res) {
    db.Cars.create(
      ["make", "model", "year", "color", "description", "photo"],
      [
        req.body.make,
        req.body.model,
        req.body.year,
        req.body.color,
        req.body.description,
        req.body.photo
      ]
    ).then(function(dbCars) {
      res.json({ id: dbCars.Id });
>>>>>>> e9ccd38559481f08f3eb1af1c8406c898aeb453e
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function(req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  // // Get all customers
  app.get("/api/customer", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  // Create a new customer
  app.post("/api/customer", function(req, res) {
    db.Customers.create(req.body).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  // Delete a customer by id
  app.delete("/api/customer/:id", function(req, res) {
    db.Customers.destroy({ where: { id: req.params.id } }).then(function(
      dbCustomers
    ) {
      res.json(dbCustomers);
    });
  });
};
