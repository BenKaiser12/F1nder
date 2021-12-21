var express = require('express');
var router = express.Router();
var driversController = require('../controllers/drivers.controller');

// Get all drivers by seasons
router.get('/:season', driversController.getAllBySeason)


module.exports = router;