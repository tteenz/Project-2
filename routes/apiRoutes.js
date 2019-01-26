const db = require("../models");

module.exports = function (app) {
  // Get all cars
  app.get("/api/car", function (req, res) {
    db.Cars.findAll({
      // include: [db.Customers]
    }).then(function (dbCar) {
      res.json(dbCar);
    });
  });

  // app.get("/inventory", function (req, res) {
  //   db.Cars.create({
  //     make: 'McLaren',
  //     model: '600LT',
  //     year: 2020,
  //     color: 'White',
  //     photo: 'https://66.media.tumblr.com/90ad708a360d7fe03aa8480059f30c46/tumblr_pk8e2yNJ3D1votm1fo1_1280.jpg',
  //     description: 'Brand new and super fast!'
  //   }).then(function (dbCar) {
  //     res.render("inventory", {
  //       car:dbCar
  //     });
  //   });
  // })

  // app.get("/inventory", function (req, res) {
  //   db.Cars.create({
  //     make: 'Audi',
  //     model: 'R8',
  //     year: 2019,
  //     color: 'Black',
  //     photo: 'https://66.media.tumblr.com/c7ddfe49671cbd0f784a929af9125329/tumblr_osqtzmoL0e1rsezm9o1_1280.jpg',
  //     description: 'Matte black with black interiors. Nice and clean.'
  //   }).then(function (dbCar) {
  //     res.render("inventory", {
  //       car:dbCar
  //     });
  //   });
  // })



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

  // // Get all customers
  // app.get("/login", function(req, res) {
  //   db.Customers.findAll({}).then(function(dbCustomers) {
  //     res.json(dbCustomers);
  //   });
  // });

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
