var db = require("../models");

module.exports = function (app) {
  // Load home page
  app.get("/", function (req, res) {
    res.render("index", {
    });
  });

  // Load ID car page
  app.get("/cars/:id", function (req, res) {
    db.Cars.findOne({ where: { id: req.params.id } }).then(function (dbCars) {
      res.render("cars", {
        cars: dbCars
      });
    });
  });

  //Load sell car page
  app.get("/add", function (req, res) {
    db.Cars.findAll({}).then(function (dbCar) {
      res.render("add", {
        car: dbCar
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
