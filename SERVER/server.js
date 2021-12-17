// Variables
var express = require('express'), 
    ErgastClient = require('ergast-client'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000,
    ergast = new ErgastClient();

// configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routes
var baseRoutes = require('./routes/base.routes')
var driverRoutes = require('./routes/drivers.routes')

// Register ROutes
app.use('/api', baseRoutes);
app.use('/api/drivers', driverRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server started on http:/localhost:${port}`)
});