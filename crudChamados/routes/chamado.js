var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Chamado = require('../models/Chamado.js');

/*CHAMADOS */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Chamado.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/*CHAMADO BY ID */
router.get('/:id', function(req, res, next) {
  Chamado.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    console.log("CHAMADO >>>>", post);
    res.json(post);
  });
});

/* SAVE CHAMADO */
router.post('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Chamado.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHAMADO */
router.put('/:id', function(req, res, next) {
  Chamado.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHAMADO */
router.delete('/:id', function(req, res, next) {
  Chamado.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
