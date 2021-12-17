
var express = require('express');
var router = express.Router();
var drivers = require('../controllers/drivers.controller.js');

// Get all drivers by seasons
router.get('/:season', drivers.getAllBySeason)


module.exports = router;