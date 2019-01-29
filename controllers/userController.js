var db = require("../models/");
exports.account = function(req, res) {
  db.Cars.findOne({ where: { id: req.params.id } }).then(function(dbCars) {
    res.render("cars", {
      cars: dbCars
    });
  });
};
exports.backHome = function(req, res) {
  res.render("index", {});
};
