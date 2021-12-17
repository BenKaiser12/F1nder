
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql_password',
  database: 'ergast_db'
});

// Get all Drivers
router.route('/:year').get(function(req, res) {
  connection.connect(function(err) {
    if (err) {
      return console.error("Error: " + err.message)
    }

    console.log('Connected to the MySql database.')
  })

  connection.query('SELECT DISTINCT drivers.* FROM drivers JOIN driverStandings ON driverStandings.driverId = drivers.driverId JOIN races ON races.raceId = driverStandings.raceId AND races.year=?', [req.params.year], function(err, drivers) {
    console.log(drivers)
    if (!err) res.send(drivers)

    connection.end();
  });
})


module.exports = router;