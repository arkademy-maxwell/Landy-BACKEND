const DB = require('../config/databaase/database')

module.exports = {
  selectAll: async () => {
    try {
      return await DB.query(`SELECT * FROM ${table}`)
    }
    catch (err) {
      console.log(err)
    }
  },
  findWhere: async (TABLE, FILTER) => {
    try {
      return await DB.query(`SELECT * FROM ${TABLE} WHERE ?`, FILTER)
    }
    catch (err) {
      console.log(err)
    }
  },
  insertData: async (TABLE, DATA) => {
    try {
      return DB.query(`INSERT INTO ${TABLE} SET ?`, DATA)
    }
    catch (err) {
      console.log(err)
    }
  },
  updateData: async (TABLE, DATA, FILTER) => {
    try {
      return DB.query(`UPDATE ${TABLE} SET ? WHERE ?`, [DATA, FILTER])
    }
    catch (err) {
      console.log(err)
    }
  }
}