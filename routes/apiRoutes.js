var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/all", function(req, res) {
    db.Cars.findAll({}).then(function(db) {
      res.json(db);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Cars.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Cars.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
