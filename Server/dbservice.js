const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

let instance = null;
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Database");
  }
});

class DBservice {
  static getDBServiceInstance() {
    return instance ? instance : new DBservice();
  }
  async getAllData() {
    try {
      const res = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM app;";
        conn.query(query, (err, results) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(results);
          }
        });
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DBservice;
