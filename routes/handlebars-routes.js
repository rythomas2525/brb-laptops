// var express = require("express");



var db = require("../models");
var lap = [{ "id": 1, "brand": "Apple", "model": "MacBook Pro", "operating_system": "Mac OS", "laptop_condition": 5, "processor": "i9", "graphics": "AMD Radeon Pro 5500M with 8GB of GDDR6", "ram": "64", "screen_dimension": "16.0", "hd_storage": "8TB", "release_year": 2020, "summary": "Comes with touch bar and touch id", "price": 6000, "createdAt": null, "updatedAt": null }, { "id": 2, "brand": "Dell", "model": "Alienware Area-51M", "operating_system": "Windows 10", "laptop_condition": 5, "processor": "i9", "graphics": "NVIDIA GeForce RTX™ 2080 8GB GDDR6", "ram": "64", "screen_dimension": "17.0", "hd_storage": "2TB", "release_year": 2020, "summary": "CRYO-TECH COOLING, Whisper-quiet", "price": 4295, "createdAt": null, "updatedAt": null }, { "id": 3, "brand": "ASUS", "model": "Tuf", "operating_system": "Windows 10", "laptop_condition": 4, "processor": "Quad-core AMD Ryzen 7 R7-3750H Processor", "graphics": "NVIDIA GeForce RTX 2060 8GB GDDR6", "ram": "16", "screen_dimension": "15.0", "hd_storage": "512GB", "release_year": 2019, "summary": "RGB Backlit keyboard rated for 20-million keystroke durability,Dual fans with anti-dust technology", "price": 1100, "createdAt": null, "updatedAt": null }, { "id": 4, "brand": "HP", "model": "Omen", "operating_system": "Windows 10", "laptop_condition": 5, "processor": "Intel Hexa-Core i7", "graphics": "NVIDIA GeForce GTX 1070", "ram": "16", "screen_dimension": "17.0", "hd_storage": "1TB", "release_year": 2019, "summary": "Backlit Keyboard, B&O dual speakers, HP Audio Boost, DTS Headphone:X support", "price": 1439, "createdAt": null, "updatedAt": null }]

module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("works")
        db.laptops.findAll({ raw: true }).then(function (laptopData) {
            // var hbsObject = {
            //     laptop_data: laptopData
            // };
            // console.log(hbsObject);  
            console.log(laptopData);

            res.render("index", { laptop_data: laptopData });
            // res.json(laptopData)

            // res.render("index", hbsObject);
            // res.json(data)
        });
    });

}