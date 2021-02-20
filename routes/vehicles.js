var express = require('express');
var router = express.Router();
var vehiclesService = require('../services/vehicles-service');

router.get('/', function(req, res, next) {
  const id = req.query.id;
  const license = req.query.license;

  if (id) {
    vehiclesService.getOneById(req, res, next);
  } else if (license) {
    vehiclesService.getOneByLicense(req, res, next);
  } else {
    vehiclesService.getAll(req, res, next);
  }
});

router.post('/', vehiclesService.createOne);

router.put('/', vehiclesService.updateOne);

router.delete('/', vehiclesService.deleteOne);

module.exports = router;
