const sql = require('../db/db.js');

// Constructor
const Driver = function(driver) {
  this.driverId = driver.driverId;
  this.driverRef = driver.driverRef;
  this.number = driver.Number;
  this.code = driver.code;
  this.forename = driver.forename;
  this.surname = driver.surname;
  this.dob = driver.dob;
  this.nationality = driver.nationality;
  this.url = driver.url;
}

Driver.getAllBySeason = (season, result) => {
  sql.query('SELECT DISTINCT drivers.* FROM drivers JOIN driverStandings ON driverStandings.driverId = drivers.driverId JOIN races ON races.raceId = driverStandings.raceId AND races.year=?', [season], function(err, drivers) {
    if (err) {
      console.log("Error: ", err);
      result(err, null)
    }

    console.log("Found Drivers: ", drivers);
    result(null, drivers)
    
  })
}

module.exports = Driver;