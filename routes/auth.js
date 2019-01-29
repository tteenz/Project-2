let authController = require("../controllers/authController");
let userController = require("../controllers/userController");
const db = require("../models");
module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/login", authController.signin);
  app.get("/index", userController.backHome);
  app.get("/inventory", isLoggedIn, authController.inventory);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/inventory",
      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/inventory",
      failureRedirect: "/signin"
    })
  );
  app.get("/logout", authController.logout);

  app.get("/cars/:id", isLoggedIn, userController.account);

  app.get("/add", function(req, res) {
    db.Cars.findAll({}).then(function(dbCar) {
      res.render("add", {
        car: dbCar
      });
    });
  });

  app.post("/api/car", function(req, res) {
    db.Cars.create(req.body).then(function(dbCars) {
      res.json(dbCars);
      console.log("API Cars", req.body);
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }
};
