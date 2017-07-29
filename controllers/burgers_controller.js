var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/index", function(req, res) {
  burger.all(function(data) {
    var obj = {
      burgers: data
    };
    res.render("index", obj);
  });
});

router.put("/:id", function(req, res) {
  burger.update(req.params.id, function() {
    res.redirect('/index');
  });
});

router.post("/", function(req, res) {
  burger.insert(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

module.exports = router;