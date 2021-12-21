var mysql = require('mysql');
var dbConfig = require('../configs/config');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

connection.connect( err => {
  if(err) {
    console.log('Error: ', err.message)
  };
  console.log("Succesfully connected to the Database")
})

module.exports = connection;