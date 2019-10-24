const DB = require('../config/databaase/database')

module.exports = {
  selectAll: async () => {
    try {
      return DB.query(`SELECT * FROM ${table}`)
    }
    catch (err) {
      console.log(err)
    }
  },
  selectDetail: async (FILTER) => {
    try {
      return DB.query(`SELECT * FROM ${table} WHERE ?`, FILTER)
    }
    catch (err) {
      console.log(err)
    }
  },
}