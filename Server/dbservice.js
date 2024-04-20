const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

let instance = null;

class DBservice {
  static getDBServiceInstance() {
    return instance ? instance : new DBservice();
  }
}

module.exports = DBservice;
