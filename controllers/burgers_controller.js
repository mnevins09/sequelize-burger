var express = require("express");

var router = express();

var db = require("../models");
require('dotenv').config();

router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    res.render("index", { burgers: data });
  });
});


router.post("/", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function (data) {
    res.redirect("/");
  })
});



router.put("/", function (req, res) {
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.id,
      },
    },
  ).then(function (data) {
    res.redirect("/");
  })
});



module.exports = router;