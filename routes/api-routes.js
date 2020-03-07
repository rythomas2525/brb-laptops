
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
      brand: req.body.brand,
      model: req.body.model,
      operating_system: req.body.operating_system,
      laptop_condition: req.body.laptop_condition,
      processor: req.body.processor,
      graphics: req.body.graphics,
      ram: req.body.ram,
      screen_dimension: req.body.screen_dimension,
      hd_storage: req.body.hd_storage,
      release_year: req.body.release_year,
      summary: req.body.summary,
      price: req.body.price
    }).then(function (dblaptops) {
      res.json(dblaptops);
    })
      .catch(function (err) {

        res.json(err);
      });
  });

  // app.get("/api/users", function (req, res) {
  //   db.users.findAll({}).then(function (dbusers) {
  //     res.json(dbusers);
  //   });
  // });

  // app.post("/api/users", function (req, res) {
  //   db.users.create({
  //     name: req.body.name,
  //     email: req.body.email,
  //     phone_number: req.body.phone_number,
  //     city: req.body.city
  //   }).then(function (dbusers) {
  //     res.json(dbusers);
  //   })
  //     .catch(function (err) {

  //       res.json(err);
  //     });
  // });


};
