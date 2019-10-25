const mysql = require("mysql");
const config = require("./config");
const util = require('util');

const connection =  mysql.createPool(config.database.mysql);

connection.getConnection((err, conn) => {
  if (err) throw err
  if (conn) conn.release()
})

connection.query = util.promisify(connection.query)

module.exports = connection;
