
var db = require("../models");

// Routes
module.exports = function (app) {


  app.get("/api/laptops", function (req, res) {
    db.laptops.findAll({}).then(function (dblaptops) {
      res.json(dblaptops);
    });
  });


  app.post("/api/laptops", function (req, res) {
    db.laptops.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dblaptops) {
      res.json(dblaptops);
    })
      .catch(function (err) {

        res.json(err);
      });
  });


};
