// Variables
var express = require('express');
var ErgastClient = require('ergast-client');
var app = express();
var ergast = new ErgastClient();
var PORT = 8000;

// Middleware


// Start Server
app.listen(PORT, () => {
  console.log(`Server started on http:/localhost:${PORT}`)
  
    ergast.getDrivers(new Date().getFullYear(), function(err, drivers) {
      if(!err) console.log(drivers) 
    })
});