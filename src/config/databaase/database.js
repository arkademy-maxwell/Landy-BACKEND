const mysql = require("mysql");
const config = require("./config");

const connection = mysql.createConnection(config.database.mysql);

connection.connect(err => {
  if (err) console.log(`Error:  ${err}`);
  console.log("Database Connected!");
});

module.exports = connection;
