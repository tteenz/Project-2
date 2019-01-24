var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Cars.findAll({}).then(function(dbCar) {
      res.render("index", {
        car: dbCar
      });
    });  
  });

  // Load example page and pass in an example by id
  app.get("/cars/:id", function (req, res) {
    db.Cars.findOne({ where: { id: req.params.id } }).then(function (dbCars) {
      res.render("cars", {
        cars: dbCars
      });
    });
  });

  //Load add car page
  app.get("/add", function (req, res) {
    res.render("add");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
