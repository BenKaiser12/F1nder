const Driver = require('../models/driver.js');

exports.getAllBySeason = function(req, res) {
  // console.log(req)
  Driver.getAllBySeason(req.params.season, (err, drivers) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Season: " + req.params.season
      });
    }
    
    res.send(drivers);
  })
}