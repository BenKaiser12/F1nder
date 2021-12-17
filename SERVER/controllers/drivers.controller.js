const Driver = require('../models/driver.js');

exports.getAllBySeason = (req, res) => {
  Driver.getAllBySeason(req.params.season, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Tutorial with id " + req.params.id
      });
    }
    res.send(data);
  })
}