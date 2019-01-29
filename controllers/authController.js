var db = require("../models");
exports.signup = function(req, res) {
  res.render("login");
};

exports.signin = function(req, res) {
  res.render("signup");
};

exports.inventory = function(req, res) {
  db.Cars.findAll({}).then(function(dbCar) {
    res.render("inventory", {
      car: dbCar
    });
  });
};
exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
