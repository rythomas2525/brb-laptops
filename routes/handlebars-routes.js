var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    laptop.all(function (data) {
        var hbsObject = {
            laptops: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});