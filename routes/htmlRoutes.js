var db = require("../models");

module.exports = function (app) {
  // Load home page
  app.get("/", function (req, res) {
    res.render("index", {
    });
  });
  //load login page
  app.get("/login", (req, res) => {
    db.Customers.findAll({}).then(function(dbCustomer) {
      res.render(
        "login",
        { customers: dbCustomer }
        //
      );
    });
  });
  // Load example page and pass in an example by id
  app.get("/cars/:id", function(req, res) {
    db.Cars.findOne({ where: { id: req.params.id } }).then(function(dbCars) {
      res.render("cars", {
        cars: dbCars
      });
    });
  });

    // Load inventory car page
    app.get("/inventory", function (req, res) {
      db.Cars.findAll({}).then(function (dbCar) {
        res.render("inventory", {
          car: dbCar
        });
      });
    });

    // app.get("/inventory", function(req, res) {
    //   db.Cars.create({
    //     make: 'McLaren',
    //     model: '600LT',
    //     year: 2020,
    //     color: 'White',
    //     photo: 'https://66.media.tumblr.com/90ad708a360d7fe03aa8480059f30c46/tumblr_pk8e2yNJ3D1votm1fo1_1280.jpg',
    //     description: 'Brand new and super fast!'
    //   }).then(function (dbCar) {
    //     res.render("inventory", {
    //       car: dbCar
    //     });
    //   })
    // });

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
