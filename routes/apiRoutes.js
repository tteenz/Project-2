var db = require("../models");

module.exports = function(app) {
  // Get all car
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
  app.post("/api/car", function(req, res) {
    db.Cars.create(req.body).then(function(dbCars) {
      console.log("car Api", req.body);
      res.json(dbCars);
    });
  });

  // Delete a cars by id
  app.delete("/api/car/:id", function(req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function(dbCars) {
      res.json(dbCars);
    });
  });
};
