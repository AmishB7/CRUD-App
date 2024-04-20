const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbservice = require("./dbservice");
const mysql = require("mysql");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

//create
app.post("/insert", (res, req) => {});
//read
app.get("/getAll", (res, req) => {
  const db = dbservice.getDBServiceInstance();
  express.response.json({
    sucess: true,
  });
});

//update

//delete

app.listen(process.env.PORT, () => console.log("app is running"));
