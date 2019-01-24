var db = require("../models/cars");

module.exports = function(app) {
  // Get all cars
  app.get("/api/cars", function(req, res) {
    // let query = {};
    // if (req.query.customer_id) {
    //   query.CustomerId = req.query.customer_id;
    // }
    db.Cars.findAll({
      // include: [db.Customers]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
  // show all customers with cars
  app.get("/api/customer", function(req, res) {
    db.Customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });
  app.get("/api/cars", function(req, res) {
    res.json({ hello: "hello" });
  });

  // Post route to Create a new cars
  app.post("/api/car", function(req, res) {
    db.Cars.create(req.body).then(function(dbCars) {
      console.log("car Api", req.body);
      res.json(dbCars);
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function(req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function(dbCars) {
      res.json(dbCars);
    });
  });

  //   // // Get all customers

  //   // Create a new customer
  //   app.post("/api/customer", function(req, res) {
  //     db.Customers.create(req.body).then(function(dbCustomers) {
  //       res.json(dbCustomers);
  //     });
  //   });

  //   // Delete a customer by id
  //   app.delete("/api/customer/:id", function(req, res) {
  //     db.Customers.destroy({ where: { id: req.params.id } }).then(function(
  //       dbCustomers
  //     ) {
  //       res.json(dbCustomers);
  //     });
  //   });
};
