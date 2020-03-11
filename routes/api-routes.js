
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
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
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
      price: req.body.price,
      main_photo: req.body.main_photo,
      additional_photos: req.body.additional_photos
    }).then(function (dblaptops) {
      console.log("36")
      res.json(dblaptops);
    })
      .catch(function (err) {
        console.log(err)
        res.json(err);
      });
  });

  app.delete("/api/laptops/:id", function (req, res) {
    db.laptops.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dblaptops) {
        res.json(dblaptops);
      });
  });
};
