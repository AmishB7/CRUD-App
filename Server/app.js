const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbservice = require("./dbservice");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post("/insert", (req, res) => {});
//read
app.get("/getAll", (req, res) => {
  const db = dbservice.getDBServiceInstance();
  const result = db.getAllData();
  app.get("/getAll", (req, res) => {
    const db = dbservice.getDBServiceInstance();
    const result = db.getAllData();
    result
      .then((data) => {
        res.json({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });

  // express.response.json({
  //   sucess: true,
  // });
});

//update

//delete

app.listen(process.env.PORT, () => console.log("app is running"));
